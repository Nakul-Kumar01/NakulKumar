
const express = require("express");
const chatRoute = express.Router();

const Chatllm = require("../controler/chatllm");


chatRoute.post('/chat',Chatllm);


module.exports = chatRoute;