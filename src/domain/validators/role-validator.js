const Joi = require("joi");
const { ValidationError } = require("../../errors");

module.exports = class RoleValidator {
  constructor() {}
  validate(rolename) {
    const { error, value } = Joi.validate(rolename, Joi.string().required());

    if (error) {
      throw new ValidationError("Autorização precisa ser informada");
    }

    return value;
  }
};
