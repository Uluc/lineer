const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deadlineSchema = new Schema(
  {
    class: {
      type: String,
      required: true,
    },
    deadline: {
      type: Date,
      required: true,
    },
    typeOfDeadline: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    collection: "users",
  });

const Deadline = mongoose.model("deadlines", deadlineSchema);
module.exports = Deadline;