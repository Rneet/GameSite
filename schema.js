const { Schema, model }=require('mongoose');

const gameSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imageurl: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const userSchema = new Schema({
    username: String,
    password: String
});

// Create a Mongoose Model
const User = model('User', userSchema);
const games = model("games", gameSchema);
module.exports = {
    User, games
};
