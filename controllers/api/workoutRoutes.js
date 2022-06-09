const router = require("express").Router();
const { User, Workout } = require("../../models");
const withAuth = require("../../utils/auth");
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

// // get workout by id
// router.get("/test/:id", async (req, res) => {
//   console.log(req.params);
//   try {
//     const workoutData = await Workout.findAll({
//       where: { id: req.params.id }
//     });
//     console.log("hello");
//     if (!workoutData) {
//       res
//         .status(404)
//         .json({ message: `No workout with this id ${req.params.id}` });
//       return;
//     }
//     res.status(200).json(workoutData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


router.get("/:id", async (req, res) => {
  console.log(req.params);
  try {
    const workoutData = await Workout.findAll({
      where: { id: req.params.id },
      attribute: ["id", "title", "type"],
      include: [{ model: User, attribute: ["firstName", "lastName", "bio"] }],
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
      time: req.body.time,
      duration: req.body.duration,
      size: req.body.size,
      location: req.body.location,
      address: req.body.address,
      lat: req.body.lat,
      lng: req.body.lng,
      url: req.body.url,
      description: req.body.description,
      user_id: req.session.user_id,
    });
    res.status(200).send("Workout created");
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete workout


router.delete("/:id", withAuth, async (req, res) => {
  try {
    const workoutData = await Workout.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!workoutData) {
      res.status(404).json({ message: "No project found with this id!" });
      return;
    }

    res.status(200).json(workoutData);
  } catch (err) {
    res.status(500).json(err);
  }
});


// router.delete("/:id", async (req, res) => {
//   try {
//     const workoutData = await Workout.destroy({
//       where: {
//         id: req.params.id
//       },
//     });
//     if (!workoutData) {
//       res.status(400),
//       json({
//         message: `No workout`,
//       });
//       return;
//     } console.log(`deleted row(s): ${workoutData}`);
//     res.status(200).json(workoutData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
