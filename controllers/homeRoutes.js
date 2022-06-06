const router = require("express").Router();
const { Location, Workout, User } = require("../models");

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
    console.log(workout);

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

// // new workout route
router.get("/host", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/host");
    return;
  }
  res.render("login");
});

// Temp host workout route
router.get("/new", (req, res) => {
  res.render("new");
});

// Temp Profile workout route
// router.get("/profile", (req, res) => {
//   res.render("profile");
// });

// Temp Profile workout route
// router.get("/workout", (req, res) => {
//   res.render("workout");
// });

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

module.exports = router;