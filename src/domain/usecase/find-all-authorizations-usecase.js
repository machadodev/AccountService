const { findAllAuthorizations } = require("../authorizations/services");
const db = require("../../database");
module.exports = class FindAllAuthorizationsUseCase {
  async findAllAuthorizations() {
    return await findAllAuthorizations(db);
  }
};
