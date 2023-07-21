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

  findPhotosByEvent(eventId) {
    return this.database.query(
      `SELECT p.file_name AS fileName, COUNT(e.id), p.event_id AS eventId from ${this.table} AS p
      JOIN event AS e ON p.event_id = e.id
      WHERE p.event_id = ?
      GROUP BY p.event_id`,
      [eventId]
    );
  }

  find(eventId) {
    return this.database.query(
      `select p.id, p.file_name AS fileName, p.event_id AS eventId from  ${this.table} AS p JOIN event AS e ON p.event_id = e.id where event_id = ?`,
      [eventId]
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
