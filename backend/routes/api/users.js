const router = require('express').Router();
let User = require('../../models/user.model');
let UserSession = require('../../models/userSession');

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
            return response.status(500).send({
                success: false,
                message: 'Error: Server error'
            });
        } else if (previousUsers.length > 0) {
            return response.status(400).send({
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

router.route('/api/account/signin').post((request, response, next) => {
    let email = request.body.email;
    let password = request.body.password;



    User.findOne({
        email: email

    }, (err, user) => {
        if (err) {
            return response.status(500).send({
                success: false,
                message: "Server Error."
            })
        }
        if (!user) {
            return response.status(404).send({
                success: false,
                message: "User was not found."
            })
        }




        if (!user.validPassword(password)) {
            return response.status(404).send({
                success: false,
                message: "Password was invalid."
            })
        }

        let userSession = new UserSession();
        userSession.userid = user.id;
        userSession.save((err, doc) => {
            if (err) {
                return response.status(500).send({
                    success: false,
                    message: "Server Error."
                })
            }
            return response.status(200).send({
                success: true,
                message: "Valid sign in",
                token: doc._id
            })

        })

    })






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