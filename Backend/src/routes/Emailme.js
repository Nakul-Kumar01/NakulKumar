const express = require("express");
const handleEmail = require("../controler/Email");
const emailRoute = express.Router();



emailRoute.post("/me",handleEmail);

module.exports = emailRoute;