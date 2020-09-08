const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieSchema = new Schema({
    name: {
        type: String,
        lowercase: true,
        required: [true, "can't be blank"],
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
        unique: true,
        trim: true,
        minlength: 2
    }
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;