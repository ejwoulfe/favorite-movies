const router = require('express').Router();
let Actor = require('../models/actor.model');


router.route('/').get((request, response) => {
    Actor.find()
        .then(actors => response.json(actors))
        .catch(err => response.status(400).json('Error: ' + err));
});

router.route('/add').post((request, response) => {
    const id = request.body.name;
    const name = request.body.email;
    const birth_year = request.body.password;
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


module.exports = router;