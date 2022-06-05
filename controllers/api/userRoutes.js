const router = require("express").Router();
const { User } = require("../../models");

// get all user
router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll({
      attribute: { exclude: ["password"] },
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Post method to create a new user
router.post("/", async (req, res) => {
  try {
    const userData = await User.create({
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.username = userData.username;
      req.session.logged_in = true;

      res
        .status(201)
        .json({ message: `Successfully created ${userData.username}` });
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// to check username, password and then allow user to log in
router.post("/login", async (req, res) => {
  try {
    console.log(req.body);
    const userData = await User.findOne({
      where: { email: req.body.email },
    });
    console.log(userData);

    if (!userData) {
      res
        .status(400)
        .json({ message: `Incorrect email or password, please try again` });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);
    console.log(validPassword);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: `Incorrect email or password, please try again` });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.username = userData.username;
      req.session.logged_in = true;

      res.json({ user: userData, message: `You are now logged in!` });
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//logout
router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
