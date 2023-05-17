const mongoose = require("mongoose");
const CourseSchema = mongoose.Schema({});
const Course = mongoose.model("Course", CourseSchema);
module.exports = Course;
