const mongoose = require("mongoose");
const CourseSchema = mongoose.Schema({
  course_name: { type: String, required: true },
  course_description: { type: String, required: true },
  start_date: { type: Date, required: true },
  end_date: { type: Date, required: true },
});
const Course = mongoose.model("Course", CourseSchema);
module.exports = Course;
