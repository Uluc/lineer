const express = require("express");
const cors = require("cors");

const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
const uri = process.env.DATABASE_URL;

// Bodyparser middleware

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Connected");
});

app.use(cors());
app.use(express.json());

app.listen(port, () => console.log(`Server up and running on port ${port} !`));