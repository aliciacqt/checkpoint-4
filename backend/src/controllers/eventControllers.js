const models = require("../models");

const browse = (req, res) => {
  models.event
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const browseNext = (req, res) => {
  models.event
    .findAllNext()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

// const browsePast = (req, res) => {
//   models.event
//     .findAllPast()
//     .then(([rows]) => {
//       res.send(rows);
//     })
//     .catch((err) => {
//       console.error(err);
//       res.sendStatus(500);
//     });
// };

const browsePast = (req, res) => {
  models.event
    .findAllPast()
    .then(([rows]) => {
      if (rows.length === 0) {
        res.json([]);
      } else {
        const events = [];
        for (let i = 0; i < rows.length; i += 1) {
          const {
            id,
            name,
            date,
            place,
            period,
            poster,
            price,
            usefulInformation,
            link,
            organizerId,
            fileName,
          } = rows[i];
          if (i !== 0 && events[events.length - 1].id === id) {
            events[events.length - 1].count += 1;
            events[events.length - 1].photos.push({
              fileName,
            });
          } else {
            events.push({
              id,
              name,
              date,
              place,
              period,
              poster,
              price,
              usefulInformation,
              link,
              organizerId,
              photos: [
                {
                  fileName,
                },
              ],
            });
          }
        }
        res.send(events);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.event
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const event = req.body;

  // TODO validations (length, format...)

  event.id = parseInt(req.params.id, 10);

  models.event
    .update(event)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  const event = req.body;

  // TODO validations (length, format...)

  models.event
    .insert(event)
    .then(([result]) => {
      res.location(`/events/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.event
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  browseNext,
  browsePast,
  read,
  edit,
  add,
  destroy,
};
