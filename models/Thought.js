const { Schema, model } = require('mongoose');

// Schema to create Post model
const ThoughtSchema = new Schema(
    {
    thoughtText: {
        type:  Schema.Types.ObjectId,
        required: true,
        minlength: 1,
        maxlength: 280,
    },

    createdAt: {
    Type:Date,
    default: Date.now,
    timestamp:true,
    get: (timestamp) => dateFormat(timestamp),
    
    },

    username: [
    {
        type: String,
        required: true
    }
],
reactions: [ ReactionSchema ],
},
    {
      toJSON: {
        virtuals: true,
        getters: true,
      },
      id: false,
    }
  );
  
  // Create a virtual property friendCount that gets the amount of friends
  ThoguhtSchema.virtual('reactionCount')
  //getter
  .get(function () {
    return this.reactions.length;
  });
  
  // Initialize our user model
  const Thought = model('Thought', ThoughtSchema);
  
  module.exports = Thought;