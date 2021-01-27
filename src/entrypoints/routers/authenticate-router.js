const router = require("express").Router();
const AuthenticateUseCase = require("../../domain/usecase/authenticate-usecase");
const HttpResponse = require("../helpers/http-response");
const {
  UsernameValidator,
  PasswordAuthorizationValidator
} = require("../../domain/validators");

router.post("/authorization/authorize", async (req, res, next) => {
  try {
    const httpResponse = new HttpResponse(res);
    const { username, pwd } = req.body;
    const authentiateUseCase = new AuthenticateUseCase({
      usernameValidator: new UsernameValidator(),
      passwordAuthorizationValidator: new PasswordAuthorizationValidator()
    });

    const response = await authentiateUseCase.authenticate(username, pwd);

    return httpResponse.ok(response);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
