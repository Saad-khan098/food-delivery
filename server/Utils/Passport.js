const Users = require('../Models/Users');
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy
const passport = require('passport');

const strategy = new LocalStrategy({
    usernameField:'email',
    passwordField:'password'
},
    async (email, password, done)=> {
    const user = await Users.findOne({ email: email }).exec();

    if(!user){
        console.log('user not found with this email ')
        return done(null, false)
    }
    let isPasswordRight = await bcrypt.compare(password, user.password);
    console.log('does the password match: ', isPasswordRight);

    if(isPasswordRight) 
        return done (null, user );

    return done (null, false);
})

passport.serializeUser( (userObj, done) => {
    done(null, userObj)
})
passport.deserializeUser((userObj, done) => {
    done (null, userObj )
})

module.exports = strategy
