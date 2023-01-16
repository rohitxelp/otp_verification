const mongoose = require("mongoose");

const { MONGO_URI } = process.env;


const connectDB = async () => {
  await mongoose.connect( MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  console.log("MongoDB Connected")
}
module.exports = connectDB