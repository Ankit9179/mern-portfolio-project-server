//for creating routes like (app.get)
const express = require("express");
const { PortfolioController } = require("../controllers/PortfolioCntroller");

//router object
const router = express.Router();

//route
router.post("/contact", PortfolioController);

//export
module.exports = router;
