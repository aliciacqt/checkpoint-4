const AbstractManager = require("./AbstractManager");

class EventManager extends AbstractManager {
  constructor() {
    super({ table: "event" });
  }

  insert(event) {
    return this.database.query(`insert into ${this.table} (title) values (?)`, [
      event.title,
    ]);
  }

  update(event) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [event.title, event.id]
    );
  }
}

module.exports = EventManager;
