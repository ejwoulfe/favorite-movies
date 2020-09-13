const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: {
        type: String,
        unique: true,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    actors: [{
        type: Schema.Types.ObjectId,
        ref: 'Actor'
    }]
});

module.exports = mongoose.model('Movie', movieSchema);