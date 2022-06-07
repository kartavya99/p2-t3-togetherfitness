const router = require("express").Router();
const { userInfo } = require("os");
const { User, Workout } = require("../../models");
//import withAuth middleware for authentication

// get all the workout
router.get("/", async (req, res) => {
  try {
    const workoutData = await Workout.findAll({
      attribute: ["id", "title", "type", "duration"],
      include: [{ model: User, attribute: ["firstName", "lastName"] }],
    });
    res.status(200).json(workoutData);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// get workout by id
router.get("/:id", async (req, res) => {
  console.log(req.params);
  try {
    const workoutData = await Workout.findAll({
      where: { id: req.params.id },
      attribute: ["id", "title", "type"],
      include: [{ model: User, attributes: ["firstName"] }],
    });

    if (!workoutData) {
      res
        .status(404)
        .json({ message: `No workout with this id ${req.params.id}` });
      return;
    }
    res.status(200).json(workoutData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create workout
router.post("/", async (req, res) => {
  try {
    await Workout.create({
      title: req.body.title,
      type: req.body.type,
      date: req.body.date,
      duration: req.body.duration,
      size: req.body.size,
      location: req.body.location,
      address: req.body.address,
      description: req.body.description,
      user_id: req.session.user_id,
    });
    res.status(200).send("Workout created");
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete workout
router.delete("/:id", async (req, res) => {
  try {
    const workoutData = await Workout.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    if (!workoutData) {
      res.status(400),
        json({
          message: `No workout`,
        });
      return;
    }
    res.status(200).json(workoutData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;