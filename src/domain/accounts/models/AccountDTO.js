class AccountDTO {
  constructor({ id, username, createdAt }) {
    this.id = id;
    this.username = username;
    this.createdAt = createdAt;
  }
}

const AccountMapper = {
  toEntity(dataValues) {
    if (dataValues) {
      return new AccountDTO(dataValues);
    } else {
      return null;
    }
  }
};

module.exports = AccountMapper;
