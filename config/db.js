//   res.status(200).send({ success: true, data: data });
const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(
    "mongodb+srv://Temuulen:Temuuka123@cluster0.ikgbq1w.mongodb.net/Winners",
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
