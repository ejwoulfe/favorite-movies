const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        lowercase: true,
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
        trim: true,
        minlength: 2
    },
    lastName: {
        type: String,
        lowercase: true,
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
        trim: true,
        minlength: 2
    },
    email: {
        type: String,
        lowercase: true,
        required: [true, "can't be blank"],
        match: [/\S+@\S+\.\S+/, 'is invalid'],
        unique: true,
        index: true
    },
    password: {
        type: String,
        required: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    favorites: [{
        type: Schema.Types.ObjectId,
        ref: 'Movie'
    }]
}, {
    timestamps: true,
});

userSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

userSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
}
module.exports = mongoose.model('User', userSchema);