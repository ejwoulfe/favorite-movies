const mongoose = require('mongoose');
const Movie = require('./movie.model');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        lowercase: true,
        required: [true, "can't be blank"],
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
        unique: true,
        trim: true,
        minlength: 2
    },
    email: {
        type: String,
        lowercase: true,
        required: [true, "can't be blank"],
        match: [/\S+@\S+\.\S+/, 'is invalid'],
        index: true
    },
    password: {
        type: String,
        required: true
    },
    favorites: [Movie]
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;