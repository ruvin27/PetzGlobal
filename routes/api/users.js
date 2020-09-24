const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");
const multer = require('multer');
const crypto = require('crypto');
const axios = require('axios');

// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load User model
const User = require("../../models/User");






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
        filename: ''
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

let name = "";
crypto.randomBytes(16, (err, buf) => {
  if (err) return reject(err);
  const filename = buf.toString('hex') + ".jpg";
  name = filename;
});

var storage = multer.diskStorage({ 
  destination: function (req, file, cb) { 

      cb(null, "client/src/assets") 
  }, 
  filename: function (req, file, cb) { 
    cb(null, name) 
  } 
}) 
    
const upload = multer({ storage });

//upload file
router.post('/profile', upload.single('profile'), (req, res) => {
  console.log(name)
});

//remove filename
router.patch('/delete/:id', (req, res) => {
	User.updateOne({ email : req.params.id}, {$set: {filename : "" }})
	.then(user => {
    res.json({success: true})
  })
	.catch(err => res.json({success: false}));
});

//change filename
router.patch('/update/:id/:name/:phone', (req, res) => {
	User.updateOne({ email : req.params.id}, {$set: {filename : req.params.name+ req.params.phone+".jpg" }})
	.then(user => {
    res.json({success: true})
  })
	.catch(err => res.json({success: false}));
});

//find user id with email
router.get('/find/:id', (req, res) => {
	User.findOne({ email : req.params.id})
	.then(user => {
    res.json({user})
  })
	.catch(err => res.json({success: false}));
});


//change user details
router.patch('/update/myprofile', (req, res) => {
	User.updateOne({ email : req.body.email}, {$set: {name : req.body.name, phone: req.body.phone, dob : req.body.dob, address: req.body.address, city: req.body.city, pincode: req.body.pincode, experience: req.body.experience}})
	.then()
  .catch(err => res.json({success: false}))

});


module.exports = { users:router };
