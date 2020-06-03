const router = require("express").Router();
const HttpResponse = require("../helpers/http-response");
const FindAllAccountUseCase = require("../../domain/usecase/find-all-account-usecase");

router.get("/accounts", async (req, res, next) => {
  try {
    const httpResponse = new HttpResponse(res);
    const { offset, limit } = req.query;

    const findAllAccountUseCase = new FindAllAccountUseCase();
    const response = await findAllAccountUseCase.findAllAccounts({
      offset,
      limit
    });

    return httpResponse.ok(response);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
