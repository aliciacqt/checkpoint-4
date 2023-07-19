const AbstractManager = require("./AbstractManager");

class EventManager extends AbstractManager {
  constructor() {
    super({ table: "event" });
  }

  findAll() {
    return this.database.query(
      `select id, name, date, place, period, poster, useful_information AS usefulInformation, link, organizer_id AS organizerId from  ${this.table}`
    );
  }

  find(id) {
    return this.database.query(
      `select id, name, date, place, period, poster, useful_information AS usefulInformation, link, organizer_id AS organizerId from  ${this.table} where id = ?`,
      [id]
    );
  }

  insert(event) {
    return this.database.query(
      `insert into ${this.table} (name, date, place, period, poster, price, useful_information, link, organizer_id) values (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        event.name,
        event.date,
        event.place,
        event.period,
        event.poster,
        event.price,
        event.usefulInformation,
        event.link,
        event.organizerId,
      ]
    );
  }

  update(event) {
    return this.database.query(
      `update ${this.table} set name = ?, date = ?, place = ?, period = ?, poster = ?, price = ?, useful_information = ?, link = ?, organizer_id = ? where id = ?`,
      [
        event.name,
        event.date,
        event.place,
        event.period,
        event.poster,
        event.price,
        event.usefulInformation,
        event.link,
        event.organizerId,
        event.id,
      ]
    );
  }
}

module.exports = EventManager;
