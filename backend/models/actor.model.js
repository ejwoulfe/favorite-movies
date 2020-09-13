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
    image: {
        type: String,
        default: "https://m.media-amazon.com/images/G/01/imdb/images/nopicture/medium/name-2135195744._CB466677935_.png"
    }
});

module.exports = mongoose.model('Actor', actorSchema);