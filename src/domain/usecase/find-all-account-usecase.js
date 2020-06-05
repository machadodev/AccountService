const { findAllAccounts } = require("../accounts/services");
const db = require("../../database");
module.exports = class FindAllAccountUseCase {
  async findAllAccounts({ offset, limit }) {
    return await findAllAccounts(db, { offset, limit });
  }
};
