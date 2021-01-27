const router = require("express").Router();
const HttpResponse = require("../helpers/http-response");
const FindAccountUseCase = require("../../domain/usecase/find-account-usecase");
const { UsernameValidator } = require("../../domain/validators");

router.get("/account", async (req, res, next) => {
  try {
    const findAccountUseCase = new FindAccountUseCase(new UsernameValidator());

    const { username } = req.query;

    const response = await findAccountUseCase.findAccountByUsername(username);

    const httpResponse = new HttpResponse(res);

    return httpResponse.ok(response);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
