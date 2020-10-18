const router = require('express').Router();
let Actor = require('../../models/actor.model');


// GET Routes  \\

router.route('/api/').get((request, response) => {
    Actor.find()
        .populate('movies')
        .then(actors => response.json(actors))
        .catch(err => response.status(400).json('Error: ' + err));
});

router.route('/api/:id').get((request, response) => {
    Actor.findById(request.params.id)
        .populate('movies')
        .then(actors => response.json(actors))
        .catch(err => response.status(400).json('Error: ' + err));
})


// POST Routes  \\

router.route('/api/new').post((request, response) => {
    const name = request.body.name;
    const birth_year = Date.parse(request.body.birth_year);
    const image = request.body.image;
    const description = request.body.description;
    const movies = [];
    const newActor = new Actor({
        name,
        birth_year,
        image,
        description,
        movies
    });

    newActor.save()
        .then(() => response.json('Actor added.'))
        .catch(err => response.status(400).json('Error: ' + err));


})

// UPDATE Routes  \\

router.route('/api/update/:id').post((request, response) => {
    Actor.findById(request.params.id)
        .then(actor => {
            actor.name = request.body.name;
            actor.birth_year = Date.parse(request.body.birth_year);
            actor.image = request.body.image;
            actor.description = request.body.description;
            actor.movies = request.body.movies;

            actor.save()
                .then(() => response.json('Actor updated.'))
                .catch(err => response.status(400).json('Error: ' + err));
        })
        .catch(err => response.status(400).json('Error: ' + err));
})

// DELETE Routes  \\

router.route('/api/:id').delete((request, response) => {
    Actor.findByIdAndDelete(request.params.id)
        .then(() => response.json('Actor Deleted.'))
        .catch(err => response.status(400).json('Error: ' + err));
})

module.exports = router;