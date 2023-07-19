const AbstractManager = require("./AbstractManager");

class PhotoManager extends AbstractManager {
  constructor() {
    super({ table: "photo" });
  }

  insert(photo) {
    return this.database.query(`insert into ${this.table} (title) values (?)`, [
      photo.title,
    ]);
  }

  update(photo) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [photo.title, photo.id]
    );
  }
}

module.exports = PhotoManager;
