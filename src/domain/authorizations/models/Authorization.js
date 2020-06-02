module.exports = class Authorization {
  constructor(role, expireAt) {
    this.role = role;
    this.expireAt = expireAt;
  }
};
