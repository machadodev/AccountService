module.exports = class AuthorizationNotFound extends Error {
  constructor(username) {
    super(`Autorização não existe: ${username}`);
    this.name = "AuthorizationNotFound";
  }
};
