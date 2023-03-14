const { Schema, model } = require('mongoose');
const validator = require('validator');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      max_length: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      // validator package for email validation recommended here by Kris Selbekk https://stackoverflow.com/questions/18022365/mongoose-validate-email-syntax
      validate: [validator.isEmail, 'Invalid email entered!']
    },
    thoughts: [{
      type: Schema.Types.ObjectId,
      ref: 'Thought'
    }],
    friends: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

userSchema
.virtual('friendCount')
.get(function () {
  return this.friends.length;
});

const User = model('user', userSchema);

module.exports = User;