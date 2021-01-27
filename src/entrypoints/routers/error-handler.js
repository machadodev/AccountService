const HttpResponse = require("../helpers/http-response");
const {
  ValidationError,
  AccountNotFound,
  AccountNotFoundOrPasswordIncorrect,
  AuthorizationExpired,
  AuthorizationAlreadyExists,
  AuthorizationNotFound,
  AuthorizationNotFoundOrPasswordIncorret,
  AccountAlreadyExists,
  PersonAlreadyExists
} = require("../../errors");

module.exports = (err, req, res, next) => {
  const httpResponse = new HttpResponse(res);

  if (
    err instanceof ValidationError ||
    err instanceof AuthorizationAlreadyExists ||
    err instanceof AccountAlreadyExists ||
    err instanceof PersonAlreadyExists
  ) {
    return httpResponse.badRequest(err);
  } else if (
    err instanceof AccountNotFound ||
    err instanceof AccountNotFoundOrPasswordIncorrect ||
    err instanceof AuthorizationNotFound ||
    err instanceof AuthorizationNotFoundOrPasswordIncorret
  ) {
    return httpResponse.notFound(err);
  } else if (err instanceof AuthorizationExpired) {
    return httpResponse.forbidden(err);
  }

  // default to 500 server error
  return httpResponse.serverError(err);
};
