const User = require("../models/user");

exports.findByID = async (req, res, next) => {
  const id = req.params.userID;
  const data = await User.findById(id);
  res.status(200).send({ success: true, data: data });
};

exports.findBy;
