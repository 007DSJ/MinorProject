const express = require('express');
const app = express();
const session = require('express-session');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const passport = require('passport');
const passportLocal = require('passport-local').Strategy;
const passportJWT = require('passport-jwt').Strategy;
const extractJWT = require('passport-jwt').ExtractJwt;
const dbUrl = 'mongodb://localhost:27017/minorproject';

const jwtSecret = 'minorproject';
const secret = 'secrethaivronahibataaunga';

app.use(session({ secret, saveUninitialized: true, resave: false }));

const User = require('./models/user');

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    /*useCreateIndex: true,*/
    useUnifiedTopology: true,
    /*useFindAndModify: false*/
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log('Database Connected');
});

const catchAsync = func => {
    return (req, res, next) => {
        func(req, res, next).catch(next);
    }
}

app.use(passport.initialize());

passport.use(new passportLocal(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

const opts = {};
opts.jwtFromRequest = extractJWT.fromAuthHeaderAsBearerToken();
opts.secretOrKey = jwtSecret;
passport.use(new passportJWT(opts, function (jwt_payload, done) {
    User.findOne({ _id: jwt_payload._id }, function (err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    })
}))

const getToken = user => {
    return jwt.sign(user, jwtSecret, {
        expiresIn: 144000
    })
};

const verifyUser = passport.authenticate('jwt', { session: false });

app.use(express.urlencoded({ extended: true }));    // to parse requests
app.use(express.json());                            // to parse requests
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

const port = 1808;

app.get('/', (req, res) => {
    res.send('Hello there!');
})

app.post('/signup', catchAsync(async (req, res) => {
    const { username, password, email } = req.body;
    const user = new User({ email, username });
    await User.register(user, password,
        (err, msg) => {
            if (err) {
                res.statusCode = 500;
                res.send(err);
            } else {
                res.send('Done!');
            }
        })
}))

app.post('/login', passport.authenticate('local'), catchAsync(async (req, res, next) => {
    await User.findById(req.user._id).then(
        user => {
            const token = getToken({ _id: req.user._id });
            res.send({ success: true, token });
        },
        err => next(err)
    )
}))

app.listen(port, () => {
    console.log('Listening on port 1808');
})