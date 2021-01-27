const UsernameValidator = require("./username-validator");
const PasswordValidator = require("./password-validator");

module.exports = class AccountValidator {
  constructor() {}
  validate(account) {
    const usernameValidator = new UsernameValidator();
    const passwordValidator = new PasswordValidator();

    usernameValidator.validate(account.username);
    passwordValidator.validate(account.password);

    return { username: account.username, password: account.password };
  }
};
