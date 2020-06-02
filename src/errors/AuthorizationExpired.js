module.exports = class AuthorizationExpired extends Error {
  constructor(accountId) {
    super(`Autorização expirada: ${accountId}`);
    this.name = "AuthorizationExpired";
  }
};
