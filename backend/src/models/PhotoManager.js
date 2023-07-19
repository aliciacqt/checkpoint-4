const AbstractManager = require("./AbstractManager");

class PhotoManager extends AbstractManager {
  constructor() {
    super({ table: "photo" });
  }

  findAll() {
    return this.database.query(
      `select id, file_name AS fileName, event_id AS eventId from  ${this.table}`
    );
  }

  find(id) {
    return this.database.query(
      `select id, file_name AS fileName, event_id AS eventId from  ${this.table} where id = ?`,
      [id]
    );
  }

  insert(photo) {
    return this.database.query(
      `insert into ${this.table} (file_name, event_id) values (?, ?)`,
      [photo.fileName, photo.eventId]
    );
  }

  update(photo) {
    return this.database.query(
      `update ${this.table} set file_name = ?, event_id = ? where id = ?`,
      [photo.fileName, photo.eventId, photo.id]
    );
  }
}

module.exports = PhotoManager;
