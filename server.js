//import
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");

//dotnet configration
dotenv.config();

// rest object of express
const aap = express();

//middlewares
aap.use(cors()); //it use
aap.use(express.json()); //

//routes
// //test user
// aap.use("/", (req, res) => {
//   res.send("<h1>hello bro</h1>");
// });

aap.use("/api/v1/portfolio", require("./routes/PortfolioRoutes"));

//connect mongooDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGOO_URL);
    console.log(`mongoo connection successful ${mongoose.connection.host}`);
  } catch (error) {
    console.log(`Mongoo connection error ${error}`);
  }
};
connectDB();

//port
const port = process.env.PORT || 8080;

//listen
aap.listen(port, () => {
  console.log(`server running on Port ${port}`);
});
