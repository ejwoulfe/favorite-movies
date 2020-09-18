import bcrypt from 'bcryptjs';
import config from '../../config';
import jwt from 'jsonwebtoken';
import auth from '../../middleware/auth';
import User from '../../models/user.model';


const {
    JWT_SECRET
} = config;
const router = require('express').Router();



router.route('/api/account/signup').post(async (request, response, next) => {});

router.route('/api/account/signin').post((request, response, next) => {



})