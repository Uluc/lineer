const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema(
  {
    user: {
      type: String,
      required: true,
    },
    task: {
        type: String,
        required: true,
    },
    deadline: {
      type: Date,
      required: true,
    },
    lifeSection: {
      type: String,
      required: true,
    },
    completed:{
        type: Boolean,
        default: false,
        required: true,
    }
  },
  {
    timestamps: true,
    collection: "tasks",
  });

const Task = mongoose.model("tasks", TaskSchema);
module.exports = Task;