const router = require('express').Router();
const {
  getUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser
} = require('../../controllers/userController');

router.route('/').get(getUsers).post(createUser);

router.route('/:id').get(getOneUser).put(updateUser).delete(deleteUser);

module.exports = router;