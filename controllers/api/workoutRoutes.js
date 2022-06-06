const router = require("express").Router();
const { userInfo } = require("os");
const { User, Workout } = require("../../models");
//import withAuth middleware for authentication

// get all the workout
// router.get("/", async (req, res) => {
//   try {
//     const workoutData = await Workout.findALL({
//       attribute: ["id", "title"],
//       include: [{ model: User, attribute: ["username"] }, { model: Location }],
//     });
//     res.status(200).json(workoutData);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

router.get("/", async (req, res) => {
  try {
    const userData = await Workout.findAll({
      include: [{ model: User, attribute: ["firstName"] }],
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});



// get workout by id
router.get("/:id", async (req, res) => {
  try {
    const workoutData = await Workout.findByPk({
      where: { id: req.params.id },
      // attribute: ["id", "title", "content"],
      // include: [{ model: User, attributes: ["username"] }],
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
      content: req.body.content,
      user_id: req.body.user_id,
    });
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
