const status = Object.freeze({
  SUCCESS: "SUCCESS",
  FAILED: "FAILED"
});

class Result {
  constructor({status, message, data}) {
    this.status = status;
    this.message = message;
    this.data = data;
  }
}

module.exports = { Result, status };
