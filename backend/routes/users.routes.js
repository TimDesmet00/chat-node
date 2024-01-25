const express = require("express");
const {
  getUsers,
  setUsers,
  editUser,
  deleteUser,
} = require("../controllers/users.controller");
const routerUsers = express.Router();

routerUsers.get("/", getUsers);
routerUsers.post("/", setUsers);
routerUsers.put("/:id", editUser);
routerUsers.delete("/:id", deleteUser);

module.exports = routerUsers;
