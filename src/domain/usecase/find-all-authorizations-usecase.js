const { findAllAuthorizations } = require("../authorizations/services");

module.exports = class FindAllAuthorizationsUseCase {
  async findAllAuthorizations() {
    return await findAllAuthorizations();
  }
};
