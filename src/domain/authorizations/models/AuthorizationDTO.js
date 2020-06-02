class AuthorizationDTO {
  constructor({ username, role, expireAt, deletedAt }) {
    this.username = username;
    this.role = role;
    this.expireAt = expireAt;
    this.deletedAt = deletedAt;
  }
}

const AuthorizationMapper = {
  toEntity(dataValues) {
    return new AuthorizationDTO(dataValues);
  }
};

module.exports = AuthorizationMapper;
