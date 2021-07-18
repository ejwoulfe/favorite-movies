const bcrypt = require("bcrypt");
// import auth from '../../middleware/auth';
const User = require("../../models/user.model");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
const auth = require('../../middleware/auth');

const router = require("express").Router();

router.route("/api/account/signup").post(async (request, response) => {
  const {
    firstName,
    lastName,
    email,
    password
  } = request.body;

  // Check if all fields are filled correctly.
  if (!firstName || !lastName || !email || !password) {
    return response.status(400).json({
      message: "Please enter all required fields.",
    });
  }

  try {
    const user = await User.findOne({
      email,
    });

    if (user) throw Error("User already exists.");

    // Create salt and hash
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    // Create new user object with hash password/
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hash,
    });

    // Save new user object.
    const savedUser = await newUser.save();

    jwt.sign({
        id: savedUser.id,
        email: savedUser.email,
      },
      JWT_SECRET,
      (err, token) => {
        if (err) throw err;
        response.status(200).json({
          message: "Successful Registration",
          token,
          user: {
            id: savedUser.id,
            firstName: savedUser.firstName,
            lastName: savedUser.lastName,
            email: savedUser.email,
          },
        });
      }
    );
  } catch (err) {
    response.status(400).json({
      error: err.message,
    });
  }
});

router.route("/api/account/login").post(async (request, response) => {
  const {
    email,
    password
  } = request.body;

  // Check if user entered in all the fields, if not return an error.
  if (!email || !password) {
    return response.status(400).json({
      message: "All fields required.",
    });
  }
  try {
    // Check database for an existing user.
    const user = await User.findOne({
      email,
    });

    // If no user found, throw error.
    if (!user) throw Error("User does not exist");

    // Check if password matches.
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw Error("Invalid credentials");

    jwt.sign({
        id: user.id,
        email: user.email,
      },
      JWT_SECRET,
      (err, token) => {
        if (err) throw err;
        response.status(200).json({
          message: "Successful Login",
          token,
          user: {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
          },
        });
      }
    );
  } catch (e) {
    response.status(400).json({
      msg: e.message,
    });
  }
});

// GET Request to get user data
router.route("/api/user").get(auth, async (request, response) => {
  User.findById(request.user.id)
    .select('-password')
    .then(user => response.json(user));

});
module.exports = router;