const router = require('express').Router();
let Movie = require('../../models/movie.model');


// GET Routes  \\

router.route('/api/').get((request, response) => {
    Movie.find()
        .populate('actors')
        .then(movies => response.json(movies))
        .catch(err => response.status(400).json('Error: ' + err));
});


router.route('/api/:id').get((request, response) => {
    Movie.findById(request.params.id)
        .populate('actors')
        .then(movies => response.json(movies))
        .catch(err => response.status(400).json('Error: ' + err));
})


// CREATE Routes  \\

router.route('/api/new').post((request, response) => {
    const title = request.body.title;
    const year = Date.parse(request.body.year);
    const director = request.body.director;
    const rating = request.body.rating;
    const description = request.body.description;
    const poster = request.body.poster;
    const actors = [];
    const newMovie = new Movie({
        title,
        year,
        director,
        rating,
        description,
        poster,
        actors
    });

    newMovie.save()
        .then(() => response.json('Movie added.'))
        .catch(err => response.status(400).json('Error: ' + err));


})

// UPDATE Route  \\

router.route('/api/update/:id').post((request, response) => {
    Movie.findById(request.params.id)
        .then(movie => {
            movie.title = request.body.title;
            movie.year = Date.parse(request.body.year);
            movie.director = request.body.director;
            movie.rating = request.body.rating;
            movie.description = request.body.description;
            movie.poster = request.body.poster;
            movie.actors = request.body.actors;

            movie.save()
                .then(() => response.json('Movie updated.'))
                .catch(err => response.status(400).json('Error: ' + err));
        })
        .catch(err => response.status(400).json('Error: ' + err));
})


// DELETE Routes  \\

router.route('/api/:id').delete((request, response) => {
    Movie.findByIdAndDelete(request.params.id)
        .then(() => response.json('Movie Deleted.'))
        .catch(err => response.status(400).json('Error: ' + err));
})



module.exports = router;