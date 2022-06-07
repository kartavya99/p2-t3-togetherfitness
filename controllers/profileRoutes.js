const router = require("express").Router();
const { User, Workout } = require("../models");
// import withAuth
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const workoutData = await Workout.findAll({
      attribute: ["id", "title"],
      include: [
        {
          model: User,
          attributes: ["id", "firstName", "lastName"],
        },
      ],
    });

    const workout = workoutData.map((workoutData) => {
      return workoutData.get({ plain: true });
    });

    res.render("profile", {
      workout,
      logged_in: false,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
