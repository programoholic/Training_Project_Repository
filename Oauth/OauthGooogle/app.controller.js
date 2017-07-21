const cassandra = require('cassandra-driver');
const client = new cassandra.Client({contactPoints:['127.0.0.1'], keyspace: 'sample'});
const passport=require('./config/passport');
function login(req,res){
   
     res.send("hi indise login");
     passport.authenticate('google', {scope: ['profile', 'email']});
	 app.get('/auth/google/callback', 
	 passport.authenticate('google', { successRedirect: '/profile',
	                                      failureRedirect: '/',
                                        session: false }));


}

module.exports= {

    login:login

}