const mongoose = require("mongoose");
const CourseSchema = mongoose.Schema({
  course_name: { type: String, required: true },
  instractor: { type: String, required: true },
  price: { type: Date, required: true },
  schedule: [
    {
      day_of_week: String,
      start_time: String,
      end_time: String,
      location: String,
    },
  ],
  students: [
    { firstname: String, lastname: String, email: String, grade: Number },
  ],
});
const Course = mongoose.model("Course", CourseSchema);
module.exports = Course;
