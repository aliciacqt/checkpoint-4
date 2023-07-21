const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  findAll() {
    return this.database.query(
      `select id, role, firstname, lastname, asso_name AS assoName, email, password, description from  ${this.table}`
    );
  }

  find(id) {
    return this.database.query(
      `select id, role, firstname, lastname, asso_name AS assoName, email, password, description from  ${this.table} where id = ?`,
      [id]
    );
  }

  insert(user) {
    return this.database.query(
      `insert into ${this.table} (role, firstname, lastname, asso_name, email, password, description) values (?, ?, ?, ?, ?, ?, ?)`,
      [
        user.role,
        user.firstname,
        user.lastname,
        user.assoName,
        user.email,
        user.password,
        user.description,
      ]
    );
  }

  update(user) {
    return this.database.query(
      `update ${this.table} set role = ?, firstname = ?, lastname = ?, asso_name = ?, email = ?, password = ?, description = ? where id = ?`,
      [
        user.role,
        user.firstname,
        user.lastname,
        user.assoName,
        user.email,
        user.password,
        user.description,
        user.id,
      ]
    );
  }
}

module.exports = UserManager;
