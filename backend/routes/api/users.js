const router = require('express').Router();
const {
    request,
    response
} = require('express');
let User = require('../../models/user.model');


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

router.route('api/account/signin').get((request, response, next) => {

})


// POST Routes  \\

router.route('/api/account/signup').post((request, response, next) => {
    const firstName = request.body.firstName;
    const lastName = request.body.lastName;
    const email = request.body.email;
    const password = request.body.password;
    const favorites = [];



    User.find({
        email: email

    }, (err, previousUsers) => {
        if (err) {
            return response.send({
                success: false,
                message: 'Error: Server error'
            });
        } else if (previousUsers.length > 0) {
            return response.send({
                success: false,
                message: 'Error: Account already exists.'
            });
        }

        const newUser = new User();
        newUser.firstName = firstName;
        newUser.lastName = lastName;
        newUser.email = email;
        newUser.password = newUser.generateHash(password);
        newUser.favorites = favorites;




        newUser.save()
            .then(() => response.json('User added.'))
            .catch(err => response.status(400).json('Error: ' + err));

    });



})

// UPDATE Routes  \\

router.route('/api/account/update/:id').post((request, response) => {
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
})

// DELETE Routes  \\

router.route('/api/account/:id').delete((request, response) => {
    User.findByIdAndDelete(request.params.id)
        .then(() => response.json('User Deleted.'))
        .catch(err => response.status(400).json('Error: ' + err));
})




module.exports = router;