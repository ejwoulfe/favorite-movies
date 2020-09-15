const router = require('express').Router();
let Actor = require('../models/actor.model');


// GET Routes  \\

router.route('/').get((request, response) => {
    Actor.find()
        .then(actors => response.json(actors))
        .catch(err => response.status(400).json('Error: ' + err));
});

router.route('/:id').get((request, response) => {
    Actor.findById(request.params.id)
        .then(actors => response.json(actors))
        .catch(err => response.status(400).json('Error: ' + err));
})


// POST Routes  \\

router.route('/add').post((request, response) => {
    const name = request.body.name;
    const birth_year = Date.parse(request.body.birth_year);
    const image = request.body.image;
    const newActor = new Actor({
        name,
        birth_year,
        image
    });

    newActor.save()
        .then(() => response.json('Actor added.'))
        .catch(err => response.status(400).json('Error: ' + err));


})

// UPDATE Routes  \\

router.route('/update/:id').post((request, response) => {
    Actor.findById(request.params.id)
        .then(actor => {
            actor.name = request.body.name;
            actor.birth_year = Date.parse(request.body.birth_year);
            actor.image = request.body.image;

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