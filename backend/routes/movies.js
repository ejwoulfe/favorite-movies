const router = require('express').Router();
let Movie = require('../models/movie.model');


router.route('/').get((request, response) => {
    Movie.find()
        .then(movies => response.json(movies))
        .catch(err => response.status(400).json('Error: ' + err));
});

router.route('/add').post((request, response) => {
    const id = request.body.name;
    const title = request.body.email;
    const year = request.body.password;
    const actors = [];
    const newMovie = new Movie({
        id,
        title,
        year,
        actors
    });

    newMovie.save()
        .then(() => response.json('Movie added.'))
        .catch(err => response.status(400).json('Error: ' + err));


})


module.exports = router;