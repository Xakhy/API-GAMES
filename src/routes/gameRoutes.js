const router = require("express").Router();
const auth = require("../middlewares/authMiddleware");
const ctrl = require("../controllers/gameController");

router.get("/", auth, ctrl.getGames);
router.get("/:id", auth, ctrl.getGame);
router.post("/", auth, ctrl.createGame);
router.put("/:id", auth, ctrl.updateGame);
router.delete("/:id", auth, ctrl.deleteGame);

module.exports = router;