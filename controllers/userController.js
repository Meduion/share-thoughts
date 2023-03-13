const User = require('../models/User');

module.exports = {
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  getOneUser(req, res) {
    User.findOne(req.params.id)
      // .select('-__v')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  updateUser(req, res) {
    User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, { runValidators: true})
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user found!' })
          : res.json({ user })
      )
      .catch((err) => res.status(500).json(err));
  },
  deleteUser(req, res) {
    User.deleteOne({ _id: req.params.id })
      .then((user) =>
        !user
        ? res.status(404).json({ message: 'No user found!' })
        : res.json({ user })
      )
      .catch((err) => res.status(500).json(err));
  }
}