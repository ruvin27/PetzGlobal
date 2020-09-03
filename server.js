const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
var cors = require('cors')
const methodOverride = require('method-override');
const {users} = require("./routes/api/users");

const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
app.use(cors())
app.use(express.json());
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');
// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);

var profile_pic = require("./routes/profile_pic")
app.use('/api/uploadpic', profile_pic);



var invoice = require('./routes/Invoices');
app.use('/api/invoices', invoice);

var Patients = require('./routes/mypatients');
app.use('/api/patients', Patients);

var Prescription = require('./routes/Prescriptions');
app.use('/api/prescribe',Prescription);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
