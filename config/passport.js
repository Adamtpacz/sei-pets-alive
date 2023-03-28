const passport = require('passport')
const User = require('../models/User')

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy

passport.use(new GoogleStrategy({
    // configuration object
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
}, async function(accessToken, refreshToken, profile, cb){
    // interactions with users / db / Oauth
    // id -> googleId
    // displayName
    // emails
    // photos

    // console.log("data coming from google", profile)
    try {
        let user = await User.findOne({
            googleId: profile.id
        }) // {...id} || null

        if(user){
            return cb(null, user)
        }

        user = await User.create({
            name: profile.displayName,
            googleId: profile.id,
            email: profile.emails[0].value,
            avatar: profile.photos[0].value
        })

        return cb(null, user)

    }catch(err){
        return cb(err)
    }
}))

passport.serializeUser(function (user, cb){
    // console.log("serialize User", user)
    cb(null, user._id)
})

passport.deserializeUser(async function(userId, cb){
    // console.log("deserializer running", userId)
    cb(null, await User.findById(userId))
})
