const router = require("express").Router();
const { Op } = require("sequelize");
const { User, Workout , Attendee } = require("../models");
// import withAuth
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    console.log(req.session.user_id);
    const user = await User.findOne({
      where: (id = req.session.user_id),
    });
    // console.log(req.params);
    // console.log(req.session);
    
    const hostData = await Workout.findAll({
      where: {
       user_id: req.session.user_id
      }
      });
     
      const AttendData = await Attendee.findAll({
      where: {
        user_id: req.session.user_id
      },
      attributes: ['workout_id'],
      raw: false
      });
      // console.log(AttendData);  
      // console.log(AttendData.length);
       
      const workoutData = await Workout.findAll({
      attribute: ["id", "title"],
      include: [
        {
          model: User,
          attributes: ["id", "firstName", "lastName"],
        },
      ],
    });

     const attendWorkouts = AttendData.map((AttendData) => {
      return AttendData.dataValues.workout_id
    });
        // console.log(attendWorkouts) 

    const attWorkData = await Workout.findAll({
      where: {
        Id: {
          [Op.or]: attendWorkouts
        }
      }
    });
    // console.log(attWorkData);  

    const attendWorkData = attWorkData.map((attWorkData) => {
      return attWorkData.get({ plain: true });
    });
    
    const hostWorkouts = hostData.map((hostData) => {
      return hostData.get({ plain: true });
    });

    const workouts = workoutData.map((workoutData) => {
      return workoutData.get({ plain: true });
    });
    // console.log(attendWorkData);  
    // console.log(hostWorkouts); 
    // console.log(attendWorkData.length);

    
    res.render("profile", {
      attendWorkData,
      workouts,
      hostWorkouts,
      user: user?.dataValues,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
