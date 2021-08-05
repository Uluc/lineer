const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const users = require("./routes/api/users");
const tasks = require("./routes/api/tasks");


require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
const uri = process.env.DATABASE_URL;

// Bodyparser middleware

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true  });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Connected");
});

app.use(express.urlencoded({extended: true})); 
app.use(cors());
app.use(express.json());

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/users", users);
app.use("/tasks", tasks);

app.listen(port, () => console.log(`Server up and running on port ${port} !`));