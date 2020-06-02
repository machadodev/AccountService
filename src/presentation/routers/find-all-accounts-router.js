const router = require("express").Router();
const HttpResponse = require("../helpers/http-response");
const FindAllAccountUseCase = require("../../domain/usecase/find-all-account-usecase");

router.get("/accounts", async (req, res, next) => {
  try {
    const httpResponse = new HttpResponse(res);
    const findAllAccountUseCase = new FindAllAccountUseCase();
    const response = await findAllAccountUseCase.findAllAccounts();

    return httpResponse.ok(response);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
