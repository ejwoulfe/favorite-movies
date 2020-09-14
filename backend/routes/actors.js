const router = require('express').Router();
let Actor = require('../models/actor.model');


// GET Routes  \\

router.route('/').get((request, response) => {
    Actor.find()
        .populate('movies')
        .then(actors => response.json(actors))
        .catch(err => response.status(400).json('Error: ' + err));
});

router.route('/:id').get((request, response) => {
    Actor.findById(request.params.id)
        .populate('movies')
        .then(actors => response.json(actors))
        .catch(err => response.status(400).json('Error: ' + err));
})


// POST Routes  \\

router.route('/add').post((request, response) => {
    const id = request.body.id;
    const name = request.body.name;
    const birth_year = Date.parse(request.body.birth_year);
    const movies = [];
    const newActor = new Actor({
        id,
        name,
        birth_year,
        movies
    });

    newActor.save()
        .then(() => response.json('Actor added.'))
        .catch(err => response.status(400).json('Error: ' + err));


})

// UPDATE Routes  \\

router.route('/update/:id').post((request, response) => {
    Actor.findById(request.params.id)
        .then(actor => {
            actor.title = request.body.title;
            actor.year = Date.parse(request.body.year);
            actor.actors = request.body.actors;

            actor.save()
                .then(() => response.json('Actor updated.'))
                .catch(err => response.status(400).json('Error: ' + err));
        })
        .catch(err => response.status(400).json('Error: ' + err));
})

// DELETE Routes  \\

router.route('/:id').delete((request, response) => {
    Actor.findByIdAndDelete(request.params.id)
        .then(() => response.json('Actor Deleted.'))
        .catch(err => response.status(400).json('Error: ' + err));
})

module.exports = router;