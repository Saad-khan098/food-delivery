const express = require('express');
const cors = require('cors')
const User = require('./Models/Users.js');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const passport = require('passport')
const localStrategy = require('./Utils/Passport')
const Address = require('./Models/Address.js');

console.log('checking only')



const app = express();
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

app.use(express.json());
app.use(express.urlencoded({extended: true})); 


const store = new MongoDBStore({
    uri: 'mongodb://localhost:27017/FoodDelivery',
    collection: 'userSessions',
});


app.use(session({
    secret: 'This is a secret',
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
    },
    store: store,
    saveUninitialized: true,
    resave: true,
    
}));
app.use(passport.initialize()) 
app.use(passport.session()) 
passport.use(localStrategy);


mongoose.connect('mongodb://localhost:27017/FoodDelivery')

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));


const checkAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) { return next() }
    else {
        res.status(409).send({isAuth: false})
        return res.end();
    }
}

app.get('/', checkAuthenticated, (req,res)=> {
    res.send({isAuth: true});
    res.end()
    console.log('req.user: ', req.user)
})

app.post('/login',passport.authenticate('local', {failureMessage: 'failed'}), (req,res)=> {
    console.log('login request')
    console.log(req.body)
    res.send({isAuth: true});
    res.end();
})

app.post('/signup', async (req,res)=> {
    console.log('signup request')
    console.log(req.body)

    const {email,password} = req.body;
    const user = await User.findOne({email: email}).exec();
    if(user){
        return res.status(409).end('an account with this email address already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
        ...req.body,
        password: hashedPassword,
        name: 'user',
    })
    console.log('newuser: ' , newUser)
    await newUser.save();
    res.end('success');
    
})

app.get('/logout', (req,res)=> {
    console.log('logout request');
    console.log(req.user);
    req.session.destroy()
    console.log(req.user);
    res.end();
})
app.post('/address', checkAuthenticated,  async (req,res)=> {

    const address = new Address({
        ...req.body
    })
    await address.save();

    const user = await User.findOne({_id: req.user._id}).exec();
    user.address = address._id;
    await user.save();
    res.end();
})
app.get('/address', checkAuthenticated, async (req,res)=>{
    const user = await User.findOne({_id: req.user._id}).populate('address').exec();
    if(user.address) res.send({addressLine: user.address.addressLine});
    else res.status(403).send({addressLine: 'no address found'});
    res.end();
})

app.post('/order', checkAuthenticated, async(req,res)=> {
    console.log('order request received')
    console.log(req.body);
    req.body.cart.order.forEach(elem=> {
        console.log(elem);
    })
    res.end();
})

app.listen(5000);

