const router = require("express").Router();
const { Attendee } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const attendeeData = await Attendee.create(req.body);
    res.status(200).json(attendeeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const attendeeData = await Attendee.findAll({
      // where : workout_id = req.body
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
