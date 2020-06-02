const router = require("express").Router();
const AuthorizeUseCase = require("../../domain/usecase/authorize-usecase");
const HttpResponse = require("../helpers/http-response");
const {
  UsernameValidator,
  PasswordAuthorizationValidator
} = require("../../domain/validators");

const findAllAccounts = require("../../domain/accounts/services/findAllAccounts");

router.post("/authorization/authorize", async (req, res, next) => {
  try {
    const httpResponse = new HttpResponse(res);
    const { username, pwd } = req.body;
    const authorizeUseCase = new AuthorizeUseCase({
      usernameValidator: new UsernameValidator(),
      passwordAuthorizationValidator: new PasswordAuthorizationValidator()
    });

    const response = await authorizeUseCase.authorize(username, pwd);

    return httpResponse.ok(response);
  } catch (e) {
    next(e);
  }
});

router.get("/accounts", async (req, res, next) => {
  try {
    const httpResponse = new HttpResponse(res);

    const response = await findAllAccounts();

    return httpResponse.ok(response);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
