const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");
const multer = require('multer');

// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load User model
const User = require("../../models/User");

let name = null

var storage = multer.diskStorage({ 
  destination: function (req, file, cb) { 

      // Uploads is the Upload folder 
      cb(null, "client/src/components/assets") 
  }, 
  filename: function (req, file, cb) { 
    cb(null, name) 
  } 
}) 
    
const upload = multer({ storage });





// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register",  (req, res) => {
  // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        dob: req.body.dob,
        gender: req.body.gender,
        address: req.body.address,
        city: req.body.city,
        pincode: req.body.pincode,
        college: req.body.college,
        experience: req.body.experience,
        password: req.body.password,
        filename: req.body.name+req.body.phone+'.jpg'
      });
      name= req.body.name+req.body.phone+'.jpg'
      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
  // Form validation

  const { errors, isValid } = validateLoginInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }

    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          college: user.college,
          experience: user.experience,
          address: user.address,
          pincode: user.pincode,
          city: user.city,
          phone: user.phone,
          dob: user.dob,
          gender:user.gender,
          name: user.name,
          email: user.email,
          filename: user.filename
        };

        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});

router.post('/cert', upload.single('certificate'), (req, res) => {
res.redirect('/login')
});


router.patch('/delete/:id', (req, res) => {
	User.update({ email : req.params.id}, {$set: {filename : "" }})
	.then(user => {
    res.json({success: true})
  })
	.catch(err => res.json({success: false}));
});

module.exports = { users:router };
