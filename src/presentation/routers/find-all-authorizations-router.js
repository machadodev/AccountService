const router = require("express").Router();
const HttpResponse = require("../helpers/http-response");
const FindAllAuthorizationsUseCase = require("../../domain/usecase/find-all-authorizations-usecase");

router.get("/authorizations", async (req, res, next) => {
  try {
    const httpResponse = new HttpResponse(res);
    const findAllAuthorizationsUseCase = new FindAllAuthorizationsUseCase();
    const response = await findAllAuthorizationsUseCase.findAllAuthorizations();

    return httpResponse.ok(response);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
