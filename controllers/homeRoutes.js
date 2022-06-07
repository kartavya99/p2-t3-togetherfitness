const router = require("express").Router();
const { Location, Workout, User } = require("../models");
const withAuth = require("../utils/auth");

// needs to import withAuth for authentication

//route to get all workout
router.get("/", async (req, res) => {
  try {
    // get all the workout with attributes
    const workoutData = await Workout.findAll({
      include: [
        {
          model: User,
          attributes: ["firstName", "lastName"],
        },
      ],
    });

    // Serialize data so the template can read it
    const workout = workoutData.map((workoutData) =>
      workoutData.get({ plain: true })
    );

    res.render("homepage", {
      workout,
      logged_in: req.session.logged_in,
      firstName: req.session.firstName,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// get workout by id
router.get("/workout/:id", async (req, res) => {
  try {
    console.log(req.body);
    const workoutData = await Workout.findByPk(req.params.id, {
      include: {
        model: User,
        attributes: ["id", "firstName", "lastName"],
      },
    });

    //serialize data so the template can read it
    const workout = workoutData.get({ plain: true });
    console.log(workout);

    res.render("workout", {
      workout,
      logged_in: req.session.logged_in,
      firstName: req.session.firstName,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/new", withAuth, (req, res) => {
  res.render("new");
});

// login route
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("profile");
    return;
  }
  res.render("login");
});

//sign up route
router.get("/signup", (req, res) => {
  res.render("signup");
});

//logout route
router.get("/logout", (req, res) => {
  res.redirect("/");
});

module.exports = router;
