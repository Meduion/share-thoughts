const User = require('../models/User');

module.exports = {
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  getOneUser(req, res) {
    User.findById(req.params.id)
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
    User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user found!' })
          : res.json({ user })
      )
      .catch((err) => res.status(500).json(err));
  },
  deleteUser(req, res) {
    User.findByIdAndDelete(req.params.id)
      .then((user) =>
        !user
        ? res.status(404).json({ message: 'No user found!' })
        : res.json({ user })
      )
      .catch((err) => res.status(500).json(err));
  },
  addFriend(req, res) {
    User.findByIdAndUpdate(req.params.id, {$addToSet: { friends: req.params.friendId }}, { runValidators: true, new: true })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user found with that ID' })
          : res.json({ user })
      )
      .catch((err) => res.status(500).json(err));
  },
  deleteFriend(req, res) {
    User.findByIdAndUpdate(req.params.id, {$pull: { friends: { friendId: req.params.friendId }}}, { runValidators: true, new: true })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user found with that ID' })
          : res.json({ user })
      )
      .catch((err) => res.status(500).json(err));
  },
}