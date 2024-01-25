const usersModel = require("../models/users.model");

module.exports.getUsers = async (req, res) => {
  const users = await usersModel.find();
  res.status(200).json(users);
};

module.exports.setUsers = async (req, res) => {
  if (!req.body.name) {
    return res
      .status(400)
      .json({ message: "Le nom, l'email et le password sont obligatoire" });
  }

  const user = await usersModel.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    avatar: req.body.avatar,
    biography: req.body.biography,
  });
  res.status(200).json(user);
};

module.exports.editUser = async (req, res) => {
  const user = await usersModel.findById(req.params.id);

  if (!user) {
    return res.status(400).json({ message: "L'utilisateur n'existe pas" });
  }

  const updateUser = await usersModel.findByIdAndUpdate(user, req.body, {
    new: true,
  });

  res.status(200).json(updateUser);
};

module.exports.deleteUser = async (req, res) => {
  const user = await usersModel.findById(req.params.id);

  if (!user) {
    return res.status(400).json({ message: "L'utilisateur n'existe pas" });
  }

  await user.deleteOne({ _id: req.params.id });
  res
    .status(200)
    .json({ message: "L'utilisateur a été supprimé id:" + req.params.id });
};
