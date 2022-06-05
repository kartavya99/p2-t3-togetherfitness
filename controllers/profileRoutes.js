const router = require("express").Router();
const { User, Workout } = require("../models");
// import withAuth

//find all workouts
router.get("/", async (req, res) => {
  try {
    // // console.log(req.body);
    // console.log(req.session);
    // const userData = await User.findOne({ where: { id: req.session.user_id } });
    // const user = userData.get({ plain: true });
    // console.log(user);

    const workoutData = await Workout.findAll({
      where: {
        user_id: req.session.user_id,
      },
      attribute: ["id", "title"],
      include: [
        {
          model: User,
          attributes: ["id", "firstName", "lastName"],
        },
      ],

      // where: {
      // user_id: req.session.user_id,
      // include: [
      //   {
      //     model: User,
      //     attributes: ["firstName", "lastName"],
      //   },
      // ],

      // },
      // attribute: ["id", "title"],
    });

    // let user;
    const workout = workoutData.map((workoutData) => {
      // user = workoutData.user;
      return workoutData.get({ plain: true });
    });

    // console.log(workoutData);
    // console.log(user);
    res.render("profile", {
      workout,
      logged_in: false,
    });
    // console.log(user);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;