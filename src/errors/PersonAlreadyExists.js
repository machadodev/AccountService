module.exports = class PersonAlreadyExists extends Error {
  constructor(email) {
    super(`O e-mail ${email} já consta na nossa base de dados`);
    this.name = "PersonAlreadyExists";
  }
};
