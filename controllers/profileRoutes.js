const router = require("express").Router();
const { User, Workout } = require("../models");
// import withAuth

router.get("/", async (req, res) => {
  try {
    console.log(req.session.user_id);
    const user = await User.findOne({
      where: (id = req.session.user_id),
    });
    const workoutData = await Workout.findAll({
      attribute: ["id", "title"],
      include: [
        {
          model: User,
          attributes: ["id", "firstName", "lastName"],
        },
      ],
    });

    const workouts = workoutData.map((workoutData) => {
      return workoutData.get({ plain: true });
    });

    res.render("profile", {
      workouts,
      user: user?.dataValues,
      logged_in: false,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
