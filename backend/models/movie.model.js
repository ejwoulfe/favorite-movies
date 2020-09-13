const mongoose = require('mongoose');
//<span>Photo by <a href="https://unsplash.com/@imnoom?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Noom Peerapong</a> on <a href="https://unsplash.com/s/photos/movie?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>

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
    poster: {
        type: String,
        default: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"

    },
    actors: [{
        type: Schema.Types.ObjectId,
        ref: 'Actor'
    }]
});

module.exports = mongoose.model('Movie', movieSchema);