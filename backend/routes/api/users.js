const router = require('express').Router();
let User = require('../../models/user.model');
const auth = require('../../middleware/auth');
let Movie = require('../../models/movie.model');

//  GET Routes  \\

router.route('/api/account').get((request, response) => {
    User.find()
        .populate('movies')
        .then(users => response.json(users))
        .catch(err => response.status(400).json('Error: ' + err));
});


router.route('/api/account/:id').get((request, response) => {
    User.findById(request.params.id)
        .populate('movies')
        .then(users => response.json(users))
        .catch(err => response.status(400).json('Error: ' + err));
})



// UPDATE Routes  \\

router.route('/api/account/update/:id').post(auth, (request, response) => {
    User.findById(request.params.id)
        .then(user => {
            user.firstName = request.body.firstName;
            user.lasstName = request.body.lastName;
            user.email = request.body.email;
            user.password = request.body.password;
            user.favorites = request.body.favorites;

            user.save()
                .then(() => response.json('User updated.'))
                .catch(err => response.status(400).json('Error: ' + err));
        })
        .catch(err => response.status(400).json('Error: ' + err));
});

router.route("/api/account/:id/addMovie").post(auth, (request, response) => {

    User.findById(request.params.id)
        .then((result) => {
            console.log(result);
            console.log(typeof request.body._id);
            result.favorites.push(request.body._id);
            result.save();
        })
        .then(() => response.json('User updated.'))
        .catch(err => response.status(400).json('Error: ' + err));
});

// DELETE Routes  \\

router.route('/api/account/:id').delete((request, response) => {
    User.findByIdAndDelete(request.params.id)
        .then(() => response.json('User Deleted.'))
        .catch(err => response.status(400).json('Error: ' + err));
})




module.exports = router;