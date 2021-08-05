const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const goalSchema = new Schema(
  {
    user: {
      type: String,
      required: true,
    },
    goal: {
      type: String,
      required: true,
    },
    note: {
      type: String,
      required: true,
    },
    repeat: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    collection: "users",
  });

const Goal = mongoose.model("goals", goalSchema);
module.exports = Goal;