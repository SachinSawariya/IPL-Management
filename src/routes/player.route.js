const express = require("express");
const validate = require("../common/validate");
const { playerCreateUpdateSchema } = require("../validations/players");
const playerController = require("../controllers/players.controller");

const router = express.Router();

router.post("/get-list", playerController.getList);
router.get("/get/:id", playerController.getPlayerDetails);
router.post(
  "/add",
  validate(playerCreateUpdateSchema),
  playerController.addPlayer
);
router.patch(
  "/update/:id",
  validate(playerCreateUpdateSchema),
  playerController.updatePlayer
);
router.delete("/delete/:id", playerController.deletePlayer);

module.exports = router;
