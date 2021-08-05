const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const noteSchema = new Schema(
  {
    class: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    title: {
        type: String,
        required: true,
      },
    note: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    collection: "users",
  }
);

const Note = mongoose.model("notes", noteSchema);
module.exports = Note;
