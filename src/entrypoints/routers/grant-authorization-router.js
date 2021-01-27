const router = require("express").Router();
const GrantAuthorizationUseCase = require("../../domain/usecase/grant-authorization-usecase");
const HttpResponse = require("../helpers/http-response");
const {
  UsernameValidator,
  PasswordAuthorizationValidator,
  RoleValidator,
  ExpireAtValidator
} = require("../../domain/validators");

router.post("/authorization", async (req, res, next) => {
  try {
    const httpResponse = new HttpResponse(res);
    const { username, role, pwd, expireAt } = req.body;
    const grantAuthorizationUseCase = new GrantAuthorizationUseCase({
      usernameValidator: new UsernameValidator(),
      roleValidator: new RoleValidator(),
      passwordAuthorizationValidator: new PasswordAuthorizationValidator(),
      expireAtValidator: new ExpireAtValidator()
    });

    const response = await grantAuthorizationUseCase.grant(
      username,
      role,
      pwd,
      expireAt
    );

    return httpResponse.created(response);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
