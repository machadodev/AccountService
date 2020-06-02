module.exports = class AccountNotFoundOrPasswordIncorrect extends Error {
  constructor(username) {
    super(`Autorização não encontrada/Senha incorreta: ${username}`);
    this.name = "AuthorizationNotFoundOrPasswordIncorret";
  }
};
