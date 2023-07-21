const router = require("express").Router();
const eventsRouter = require("./events.routes");
const photosRouter = require("./photos.routes");
const usersRouter = require("./users.routes");

router.use("/events", eventsRouter);
router.use("/photos", photosRouter);
router.use("/users", usersRouter);

module.exports = router;
