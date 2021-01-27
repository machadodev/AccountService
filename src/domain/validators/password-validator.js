const Joi = require("joi");
const { ValidationError } = require("../../errors");

module.exports = class PasswordValidator {
  constructor() {}
  validate(password) {
    const { error, value } = Joi.validate(password, Joi.string().required());

    if (error) {
      throw new ValidationError("Senha precisa ser informada");
    }

    return value;
  }
};
