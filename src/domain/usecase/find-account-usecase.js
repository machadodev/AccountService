const {
  findAccountByUsername
} = require("../accounts/services");

module.exports = class FindAccountUseCase {
  // constructor will be used to Dependencies Injections
  constructor(usernameValidator) {
    this.usernameValidator = usernameValidator;
  }

  async findAccountByUsername(username) {
    await this.usernameValidator.validate(username);
    return await findAccountByUsername(username);
  }
};
