const router = require("express").Router();

const photoControllers = require("../controllers/photoControllers");

router.get("/", photoControllers.browse);
router.get("/:id", photoControllers.read);
router.put("/:id", photoControllers.edit);
router.post("/", photoControllers.add);
router.delete("/:id", photoControllers.destroy);

module.exports = router;
