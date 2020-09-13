const router = require('express').Router();
let User = require('../models/user.model');


//  GET Routes  \\

router.route('/').get((request, response) => {
    User.find()
        .then(users => response.json(users))
        .catch(err => response.status(400).json('Error: ' + err));
});


router.route('/:id').get((request, response) => {
    User.findById(request.params.id)
        .then(users => response.json(users))
        .catch(err => response.status(400).json('Error: ' + err));
})


// POST Routes  \\

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

// UPDATE Routes  \\

router.route('/update/:id').post((request, response) => {
    User.findById(request.params.id)
        .then(user => {
            user.name = request.body.name;
            user.email = request.body.email;
            user.password = request.body.password;
            user.favorites = request.body.favorites;

            user.save()
                .then(() => response.json('User updated.'))
                .catch(err => response.status(400).json('Error: ' + err));
        })
        .catch(err => response.status(400).json('Error: ' + err));
})

// DELETE Routes  \\

router.route('/:id').delete((request, response) => {
    User.findByIdAndDelete(request.params.id)
        .then(() => response.json('User Deleted.'))
        .catch(err => response.status(400).json('Error: ' + err));
})




module.exports = router;