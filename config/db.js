//   res.status(200).send({ success: true, data: data });
const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(
    "mongodb+srv://Amazon123:Amazon123@cluster0.xqpzaoo.mongodb.net/MOB",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  console.log(
    `MONGOdb holbogdloo : ${conn.connection.host}`.cyan.underline.bold
  );
};
module.exports = connectDB;
