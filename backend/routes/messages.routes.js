const express = require("express");
const {
  getMessages,
  setMessages,
  editMessage,
  deleteMessage,
} = require("../controllers/messages.controller");
const routerMessages = express.Router();

routerMessages.get("/messages", getMessages);
routerMessages.get("/message/:id", getMessages);
routerMessages.post("/message", setMessages);
routerMessages.put("/message/:id", editMessage);
routerMessages.delete("/message/:id", deleteMessage);
