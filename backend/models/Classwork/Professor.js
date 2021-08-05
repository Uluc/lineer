const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const ProfessorSchema = new Schema({
  class: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },

},{
    timestamps: true,
    collection: 'users'
 });
const Professor = mongoose.model("professors", ProfessorSchema);
module.exports = Professor;
