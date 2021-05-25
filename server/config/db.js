const mongoose = require("mongoose");

module.exports = async function () {
  const conn = await mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log(`DB: ${conn.connection.name}`);
};
