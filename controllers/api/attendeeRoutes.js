const router = require("express").Router();
const { Attendee } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const attendeeData = await Attendee.create(req.body);
    res.status(200).json(attendeeData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  //hardcoded response
  const user_id = 3;
  try {
    const attendeeData = await Attendee.findAll({
      //where: { user_id: req.body.user_id },
      where: { user_id: user_id }, // this needs to be change as it is hardcoded from line 17
    });
    res.status(200).json(attendeeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const attendeeData = await Attendee.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!attendeeData) {
      res.status(400).json({ message: " there is no workout by this id" });
      return;
    }
    res.status(200).json(attendeeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
