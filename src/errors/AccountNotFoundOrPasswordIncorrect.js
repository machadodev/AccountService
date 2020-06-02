module.exports = class AccountNotFoundOrPasswordIncorrect extends Error {
  constructor(value) {
    super(`Conta não encontrada/Senha incorreta: ${value}`);
    this.name = "AccountNotFoundOrPasswordIncorrect";
  }
};
