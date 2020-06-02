class AccountDTO {
  constructor({ id, username, createdAt }) {
    this.id = id;
    this.username = username;
    this.createdAt = createdAt;
  }
}

const AccountMapper = {
  toEntity(dataValues) {
    return new AccountDTO(dataValues);
  }
};

module.exports = AccountMapper;
