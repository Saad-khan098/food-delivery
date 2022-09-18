const mongoose = require('mongoose');

const userScheme = new mongoose.Schema({
    email: String,
    password: String,
    name: String,
    address: { type: mongoose.Schema.Types.ObjectId, ref: 'Address' },
})

const User = new mongoose.model('User', userScheme);
module.exports = User;