const router = require("express").Router();
const { User, Workout } = require("../models");
// import withAuth

//find all workouts
router.get("/", async (req, res) => {
  try {
    const workoutData = await Workout.findAll({
      where: {
        user_id: req.session.user_id,
      },
      attribute: ["id", "title", "content"],
    });

    const workout = workoutData.map((workoutData) =>
      workoutData.get({ plain: true })
    );

    res.render("dashboard", {
      workouts,
      logged_in: true,
      username: req.session.username,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
