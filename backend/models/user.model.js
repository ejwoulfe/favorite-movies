const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        lowercase: true,
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
        trim: true,
        minlength: 2,
        required: [true, "First name cannot be blank."]
    },
    lastName: {
        type: String,
        lowercase: true,
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
        trim: true,
        minlength: 2,
        required: [true, "Last name cannot be blank."]

    },
    email: {
        type: String,
        lowercase: true,
        required: [true, "email cannot be blank."],
        match: [/\S+@\S+\.\S+/, 'is invalid'],
        unique: true
    },
    password: {
        type: String,
        minlength: [6, "Must be 6 characters or more."],
        required: [true, "Must enter a password."]

    },
    favorites: [{
        type: Schema.Types.ObjectId,
        ref: 'Movie'
    }]
}, {
    timestamps: true,
});


module.exports = mongoose.model('User', userSchema);