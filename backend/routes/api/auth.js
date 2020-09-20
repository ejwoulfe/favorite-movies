const bcrypt = require('bcrypt');
// import jwt from 'jsonwebtoken';
// import auth from '../../middleware/auth';
const User = require('../../models/user.model');
const JWT_SECRET = process.env.jwtSecret;



const router = require('express').Router();



router.route('/api/account/register').post(async (request, response) => {
    const {
        firstName,
        lastName,
        email,
        password
    } = request.body;

    // Check if all fields are filled correctly.
    if (!firstName || !lastName || !email || !password) {
        return response.status(400).json({
            message: 'Please enter all required fields.'
        })
    }

    try {
        const user = await User.findOne({
            email
        });

        if (user) throw Error('User already exists.');

        // Create salt and hash
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        // Create new user object with hash password/
        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hash
        });

        // Save new user object.
        const savedUser = await newUser.save();


        response.status(200).json({
            message: 'Successful Registration',
            // token,
            user: {
                id: savedUser.id,
                firstName: savedUser.firstName,
                lastName: savedUser.lastName,
                email: savedUser.email
            }
        })


        // const token = jwt.sign({
        //     id: savedUser._id
        // }, JWT_SECRET, {
        //     expiresIn: 3600
        // });



    } catch (err) {
        response.status(400).json({
            error: err.message
        })
    }
});

router.route('/api/account/login').post(async (request, response) => {
    const {
        firstName,
        lastName,
        email,
        password
    } = request.body;

    // Check if user entered in all the fields, if not return an error.
    if (!firstName || !lastName || !email || !password) {
        return response.status(400).json({
            message: 'All fields required.'
        });
    }
    try {
        // Check database for an existing user.
        const user = await User.findOne({
            email
        });
        // If no user found, throw error.
        if (!user) throw Error('User does not exist');

        // Check if password matches.
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) throw Error('Invalid credentials');

        // const token = jwt.sign({
        //     id: user._id
        // }, JWT_SECRET, {
        //     expiresIn: 3600
        // });
        // if (!token) throw Error('Couldnt sign the token');


        // On successful login, responed with 200 status and json object.
        response.status(200).json({
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });
    } catch (e) {
        response.status(400).json({
            msg: e.message
        });
    }




})

module.exports = router;