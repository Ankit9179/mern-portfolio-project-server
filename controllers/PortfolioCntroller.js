const PortfolioModel = require("../model/PortfolioModel");
const PortfolioController = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (name == "" || email == "" || message == "") {
      return res.status(400).send({
        success: false,
        message: "please fill all fields",
      });
    } else {
      const newUser = new PortfolioModel({ name, email, message });
      await newUser.save();
      console.log("user creaed success fully");
      return res.status(201).send({
        success: true,
        message: "new user created",
        newUser,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "creating user in mongodb",
      error,
    });
  }
};

module.exports = { PortfolioController };

// const PortfolioController = (req, res) => {
//   try {
//     return res.status(200).send({
//       success: true,
//       message: "message sended",
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).send({
//       success: false,
//       message: "error send email",
//       error,
//     });
//   }
// };

// module.exports = { PortfolioController };
