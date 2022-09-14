const { Schema, model } = require('mongoose');
const Thought = require('./Thought');

// Schema to create Post model
const UserSchema = new Schema(
    {
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },

   email: {
    type: String,
    unique: true,
    required: true,
    match: [ /.+\@.+\..+/],
    },

thoughts: [
    {
        type: Schema.Types.ObjectId,
        ref: "Thought",
    }
],
friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
],
},
 // virtuals & getters
    {
      toJSON: {
        virtuals: true,
        getters: true
      },
      // omit id
      id: false,
    }
  );
  
  // Create a virtual property friendCount that gets the amount of friends
  UserSchema.virtual('friendCount')
  //getter
  .get(function () {
    return this.friends.length;
  });
  
  // Initialize our user model
  const User = model('User', UserSchema);
  
  module.exports = User;