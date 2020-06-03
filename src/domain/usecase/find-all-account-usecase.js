const { findAllAccounts } = require("../accounts/services");

module.exports = class FindAllAccountUseCase {
  async findAllAccounts({ offset, limit }) {
    return await findAllAccounts({ offset, limit });
  }
};
