const Joi = require("joi");
const { ValidationError } = require("../../errors");

module.exports = class ExpireAtValidator {
  constructor() {}
  validate(date) {
    const { error, value } = Joi.validate(date, Joi.string().required());

    if (error) {
      throw new ValidationError("Data erro");
    }

    return value;
  }
};
