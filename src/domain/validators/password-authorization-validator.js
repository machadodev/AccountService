const Joi = require("joi");
const { ValidationError } = require("../../errors");

module.exports = class PasswordAuthorizationValidator {
  constructor() {}
  validate(password) {
    const { error, value } = Joi.validate(password, Joi.string().required());

    if (error) {
      throw new ValidationError("Senha de autorização precisa ser informada");
    }

    return value;
  }
};
