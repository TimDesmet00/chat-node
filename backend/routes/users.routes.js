const express = require("express");
const {
  getUsers,
  setUsers,
  editUser,
  deleteUser,
} = require("../controllers/users.controller");
const routerUsers = express.Router();

routerUsers.get("/users", getUsers);
routerUsers.get("/user/:id", getUsers);
routerUsers.post("/user", setUsers);
routerUsers.put("/user/:id", editUser);
routerUsers.delete("/user/:id", deleteUser);

module.exports = routerUsers;
