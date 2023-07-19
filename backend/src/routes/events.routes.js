const router = require("express").Router();

const eventControllers = require("../controllers/eventControllers");
const uploadPoster = require("../controllers/uploadPosterControllers");

router.get("/", eventControllers.browse);
router.get("/:id", eventControllers.read);
router.put("/:id", eventControllers.edit);
router.post("/", uploadPoster.uploadPoster, eventControllers.add);
router.delete("/:id", eventControllers.destroy);

module.exports = router;
