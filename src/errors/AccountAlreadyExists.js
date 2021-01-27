module.exports = class AccountAlreadyExists extends Error {
  constructor(username) {
    super(`O usuário ${username} já existe`);
    this.name = "AccountAlreadyExists";
  }
};
