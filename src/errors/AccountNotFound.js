module.exports = class AccountNotFound extends Error {
  constructor(value) {
    super(`Conta não encontrada [${value}]`);
    this.name = "AccountNotFound";
  }
};
