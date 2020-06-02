const Joi = require("joi");
const { ValidationError } = require("../../errors");

module.exports = class UsernameValidator {
  constructor() {}
  validate(username) {
    const { error, value } = Joi.validate(username, Joi.string().required());

    if (error) {
      throw new ValidationError(error);
    }

    return value;
  }
};
