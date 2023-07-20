const AbstractManager = require("./AbstractManager");

class EventManager extends AbstractManager {
  constructor() {
    super({ table: "event" });
  }

  findAll() {
    return this.database.query(
      `select e.id, e.name, e.date, e.place, e.period, e.poster, e.price, e.useful_information AS usefulInformation, e.link, e.organizer_id AS organizerId, p.file_name AS fileName from  ${this.table} AS e LEFT JOIN photo AS p ON e.id = p.event_id`
    );
  }

  findAllPast(date) {
    return this.database.query(
      `select e.id, e.name, e.date, e.place, e.period, e.poster, e.price, e.useful_information AS usefulInformation, e.link, e.organizer_id AS organizerId, p.file_name AS fileName from  ${this.table} AS e LEFT JOIN photo AS p ON e.id = p.event_id WHERE e.date < NOW()`,
      [date]
    );
  }

  findAllNext(date) {
    return this.database.query(
      `select e.id, e.name, e.date, e.place, e.period, e.poster, e.price, e.useful_information AS usefulInformation, e.link, e.organizer_id AS organizerId, p.file_name AS fileName from  ${this.table} AS e LEFT JOIN photo AS p ON e.id = p.event_id WHERE e.date >= NOW()`,
      [date]
    );
  }

  find(id) {
    return this.database.query(
      `select e.id, e.name, e.date, e.place, e.period, e.poster, e.price, e.useful_information AS usefulInformation, e.link, e.organizer_id AS organizerId, p.file_name AS fileName from  ${this.table} AS e JOIN photo AS p ON e.id = p.event_id where e.id = ?`,
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
