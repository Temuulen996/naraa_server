const Course = require("../models/course");

exports.findAll = async (req, res, next) => {
  //   const data = await Course.find();
  //   res.status(200).send({ success: true, data: data });
  res.status(200).send({ success: true });
};
