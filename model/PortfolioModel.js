const mongoose = require("mongoose");

//schema object
const Schema = mongoose.Schema;
//mongoo schema
const portfolioSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
    },
    message: {
      type: String,
      required: [true, "message is required"],
    },
  },
  { timestamps: true }
);

//model
const PortfolioModel = mongoose.model("Users", portfolioSchema);

// export
module.exports = PortfolioModel;
