const router = require("express").Router();
const CreateAccountUseCase = require("../../domain/usecase/create-account-usecase");
const Account = require("../../domain/accounts/models/Account");
const Person = require("../../domain/people/models/Person");
const HttpResponse = require("../helpers/http-response");
const {
  AccountValidator,
  PersonValidator
} = require("../../domain/validators");

router.post("/account",async (req,res,next) => {
  try {
    const httpResponse = new HttpResponse(res);

    const account = new Account(req.body);
    const person = new Person(req.body);

    const createAccountUseCase = new CreateAccountUseCase({
      accountValidator: new AccountValidator(),
      personValidator: new PersonValidator()
    });

    const response = await createAccountUseCase.create(account,person);

    return httpResponse.created(response);
  } catch(e) {
    next(e);
  }
});

module.exports = router;
