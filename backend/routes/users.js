const router = require('express').Router();
let User = require('../models/user.model');


router.route('/').get((request, response) => {
    User.find()
        .then(users => response.json(users))
        .catch(err => response.status(400).json('Error: ' + err));
});

router.route('/add').post((request, response) => {
    const name = request.body.name;
    const email = request.body.email;
    const password = request.body.password;
    const favorites = [];
    const newUser = new User({
        name,
        email,
        password,
        favorites
    });

    newUser.save()
        .then(() => response.json('User added.'))
        .catch(err => response.status(400).json('Error: ' + err));


})


module.exports = router;