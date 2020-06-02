module.exports = class AuthorizationAlreadyExists extends Error {
  constructor(username) {
    super(`O usuário ${username} já possui uma permissão associada`);
    this.name = "AuthorizationAlreadyExists";
  }
};
