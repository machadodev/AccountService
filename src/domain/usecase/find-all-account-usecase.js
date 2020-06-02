const { findAllAccounts } = require("../accounts/services");

module.exports = class FindAllAccountUseCase {
  async findAllAccounts() {
    return await findAllAccounts();
  }
};
