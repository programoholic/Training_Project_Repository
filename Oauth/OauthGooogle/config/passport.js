const GoogleStretegy = require('passport-google-oauth').OAuth2Strategy;
const configAuth = require('./auth');
const cassandra = require('cassandra-driver');
const client = new cassandra.Client({ contactPoints: ['127.0.0.1'], keyspace: 'calvinusers' });
const jwt= require('jsonwebtoken');

module.exports = function (passport) {



    // passport.serializeUser(function (user, done) {
    //     done(null, user._id);
    // });

    // passport.deserializeUser(function (id, done) {
    //     User.findById(id, function (err, user) {
    //         done(err, user);
    //     });
    // });

    passport.use(new GoogleStretegy({
        
        clientID: configAuth.googleAuth.clientID,
        clientSecret: configAuth.googleAuth.clientSecret,
        callbackURL: configAuth.googleAuth.callbackURL
    },
        function (accessToken, refreshToken, profile, done) {

            process.nextTick(function () {
                console.log("inside pasport");
                let params = {

                    email: profile.emails[0].value,
                    id: profile.id,
                    token: accessToken,
                    image: profile.photos[0].value
                }

                let userDetails = {
                            username: profile.displayName,
                            email: profile.emails[0].value,

                        }; 
                      let userToken=jwt.sign(userDetails,"secret key", {expiresIn:60*30});       

                client.execute('select * from sampleuser where email=:email', params, (err, result) => {

                    if (err)
                        return done(err);
                    else {
                        let x = result.rows;
                        if (!Array.isArray(x) || !x.length) {
                            // array does not exist, is not an array, or is empty
                            console.log("empty array");

                            client.execute('INSERT into sampleuser(email,profilepic) VALUES(:email,:image)', params, (err, result) => {

                                if (err)
                                    return err;
                                else {
                                    console.log('result is updated');
                                    return done(null, userToken);
                                }

                            });

                        }
                        else {
                            console.log(result.rows);
                            return done(null, userToken);
                        }
                    }

                })

            });
            // console.log(profile.displayName);
            // console.log(profile.id);
            // console.log(profile.emails);
            // console.log(profile.photos);
        }
    ));


};