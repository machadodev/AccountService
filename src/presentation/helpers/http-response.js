const { UnauthorizedError, ServerError } = require("../errors");

module.exports = class HttpResponse {
  constructor(res) {
    this.res = res;
  }

  async ok(body) {
    return this.res.status(200).json({
      statusCode: 200,
      data: body,
      message: ""
    });
  }

  async created(body) {
    return this.res.status(201).json({
      statusCode: 201,
      data: body,
      message: ""
    });
  }

  async badRequest(error) {
    return this.res.status(400).json({
      statusCode: 400,
      data: null,
      message: error.message
    });
  }

  async unauthorizedError() {
    return this.res.status(401).json({
      statusCode: 401,
      data: null,
      message: new UnauthorizedError().message
    });
  }

  async forbidden(error) {
    return this.res.status(403).json({
      statusCode: 403,
      data: null,
      message: error.message
    });
  }

  async notFound(error) {
    return this.res.status(404).json({
      statusCode: 404,
      data: null,
      message: error.message
    });
  }

  async serverError(error) {
    console.error("EXCEPTION:", error.message);

    return this.res.status(500).json({
      statusCode: 500,
      data: null,
      message: new ServerError().message
    });
  }
};
