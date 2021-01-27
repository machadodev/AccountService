const pool = require("../../database");
const {
  findAccountByUsername,
  createAccount
} = require("../accounts/services");
const { findPersonByEmail, createPerson } = require("../people/services");
const { AccountAlreadyExists, PersonAlreadyExists } = require("../../errors");

module.exports = class CreateAccountUseCase {
  constructor(validators) {
    ({
      accountValidator: this.accountValidator,
      personValidator: this.personValidator
    } = validators);
  }

  async create(account, person) {
    // note: we don't try/catch this because if connecting throws an exception
    // we don't need to dispose of the client (it will be undefined)
    const client = await pool.connect();

    try {
      await client.query("BEGIN");

      this.accountValidator.validate(account);
      this.personValidator.validate(person);

      const accountExists = await findAccountByUsername(
        client,
        account.username
      );

      if (accountExists) {
        throw new AccountAlreadyExists(account.username);
      }

      const personExists = await findPersonByEmail(client, person.email);

      if (personExists) {
        throw new PersonAlreadyExists(person.email);
      }

      const newAccount = await createAccount(client, account);

      const newPerson = await createPerson(client, person, newAccount.data);

      await client.query("COMMIT");

      return { ...newAccount.data, ...newPerson.data };
    } catch (e) {
      await client.query("ROLLBACK");
      throw e;
    } finally {
      if (client) {
        client.release();
      }
    }
  }
};
