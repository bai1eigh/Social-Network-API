const { Schema, model, Types } = require('mongoose');
const dateFormat = require("../utils/dateFormat");

const ReactionSchema = new Schema(
    {
      reactionId: {
        // Mongoose's ObjectId data type
        type: Schema.Types.ObjectId,
        // Default value is set to a new ObjectId
        default: () => new Types.ObjectId(),
      },
  
      reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
      },
  
      username: {
        type: String,
        required: true,
      },
  
      createdAt: {
        type: Date,
        default: Date.now,
        // Use a getter method to format the timestamp on query
        get: (timestamp) => dateFormat(timestamp),
      },
    },
    {
      toJSON: {
        getters: true,
      },
      id: false,
    }
  );
// Schema to create thought model
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