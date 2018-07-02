const express = require("express");
const router = express.Router();
const gratavar = require("gravatar");

//load User model
const User = require("../../models/User");

// @route   GET   api/users/register
// @desc    Go to Registration Page
// @access  Public
router.get("/register", (req, res) => {
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "email already exists" });
    } else {
      const avatar = gratavar.url(req.body.email, {
        s: "200", // size
        r: "pg", // rating
        d: "mm" // Default
      });

      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        avatar,
        password: req.body.password
      });
    }
  });
});

module.exports = router;
