const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const actorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    birth_year: {
        type: Number,
        required: true

    },
    movies: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Movie'
    }]
});

module.exports = mongoose.model('Actor', actorSchema);