const router = require("express").Router();
const RevokeAuthorizationUseCase = require("../../domain/usecase/revoke-authorization-usecase");
const HttpResponse = require("../helpers/http-response");
const { UsernameValidator } = require("../../domain/validators");

router.delete("/authorization", async (req, res, next) => {
  try {
    const httpResponse = new HttpResponse(res);
    const { username } = req.body;
    const revokeAuthorizationUseCase = new RevokeAuthorizationUseCase({
      usernameValidator: new UsernameValidator()
    });

    const response = await revokeAuthorizationUseCase.revoke(username);

    return httpResponse.ok(response);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
