const express = require("express");
const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
const passport = require("passport")

const users = require("./routes/api/users")

require("dotenv").config;

const app = express();

//Bodyparser middleware
app.use(
    express.urlencoded({
        extended: false
    })
)
app.use(express.json());

//DB Config
const db = require('./config/keys').mongoURI;

//Connectn to MongoDB
mongoose.connect(
    db,
    {useNewUrlParser: true}
)
.then(()=> console.log("MongoDB successfully connected"))
.catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);

const port = process.env.PORT || 8080 ;

app.listen(port, () => console.log(`Server running on ${port} !`));