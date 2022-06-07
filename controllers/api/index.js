const router = require("express").Router();

const userRoutes = require("./userRoutes");
const workoutRoutes = require("./workoutRoutes");
const attendeeRoutes = require("./attendeeRoutes");

router.use("/user", userRoutes);
router.use("/workout", workoutRoutes);
router.use("/attendee", attendeeRoutes);

module.exports = router;
