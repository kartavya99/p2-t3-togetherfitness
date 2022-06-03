const router = require("express").Router();
const { Location, Workout, User } = require("../models");

// needs to import withAuth for authentication

//route to get all workout
router.get("/", async (req, res) => {
  try {
    // get all the workout with attributes
    const workoutData = await Workout.findAll({});

    // Serialize data so the template can read it
    const workout = workoutData.map((workoutData) =>
      workoutData.get({ plain: true })
    );
    console.log(workout);

    res.render("homepage", {
      workout,
      // logged_in: req.session.logged_in,
      // username: req.session.username,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// get workout by id
router.get("/workout/id", async (req, res) => {
  try {
    const workoutData = await Workout.findByPk(req.params.id, {
      include: [
        {
          model: Workout,
          //attribute: []
          include: { model: user, attributes: [] },
        },
      ],
    });

    //serialize data so the template can read it
    const workout = workoutData.get({ plain: true });

    res.render("single-workout", {
      workouts,
      logged_in: req.session.logged_in,
      username: req.session.username,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// login route
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

//sign up route
router.get("/signup", (req, res) => {
  res.render("signup");
});

module.exports = router;
