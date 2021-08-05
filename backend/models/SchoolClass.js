const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const ClassSchema = new Schema({
  //which user it belongs to
  user: {
    type: String,
    required: true,
  },
  //name of class
  name: {
    type: String,
    required: true
  },
  professor: {
    type: String,
    required: true
  },
  year: {
    type: Date,
    default: Date.now.year
  }
},{
    timestamps: true,
    collection: 'classes'
 });
const SchoolClass = mongoose.model("classes", ClassSchema);
module.exports = SchoolClass;
