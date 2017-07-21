const async = require('async');
const cassandra = require('cassandra-driver');


const USERS_TABLE = 'users';

const client = new cassandra.Client({
	contactPoints: ['127.0.0.1'],
	keyspace: 'calvin',
});


// this function is to check if user record is already present in database
function checkIfUserExists(email, done) {

  // setTimeout(function() {
  //   console.log("\t\t\t 1");
  //   done(null, `1. checking if user exists`);
  // }, 2000);

  const chkQuery = `SELECT * FROM ${USERS_TABLE} where email = '${email}'`;
  console.log("\t\t\t 1");
  client.execute(chkQuery, (err, results) => {
  	if (err) {
  		return done(err, 'db error');
  	}
  	
  	const x = results.rows;
  	console.log('rows are : ',x);
  	if (!Array.isArray(x) || !x.length) {
  		return done(null, false);
  	}
  	return done(null, true);
  });
}
// this function is to update last login time in database
function updateLastLoginTime(profile,prevTaskResult, done) {
	setTimeout(function() {
		console.log("\t\t\t 2",prevTaskResult);
		done(null, `2. Updating last login time`);
	}, 2000);


}
// this function is to insert new user in database
function insertUserInDb(profile, prevTaskResult,done) {
	setTimeout(function() {
		console.log("\t\t\t 3");
		done(null, `3. Inserting data ${prevTaskResult}`);
	}, 2000);


}
// this function is  to handle a user after  successfull login .
// If user already exists in database , last login time gets updated
// else new record in inserted in database
function updateUser(profile, done) {

	console.log("started execution");
	let data={"name":"anis@gmail.com"};

// 	async.waterfall([
   
// 		checkIfUserExists.bind(null,data),
// 		function(condition,done){
// 			console.log('done is ',condition);
// 			if(condition) {
// 				console.log('got true');
// 				async.waterfall([insertUserInDb.bind(null,'hi')]);
// 			}
// 			else {
// 				async.waterfall([updateLastLoginTime.bind(null,data)],done)
// 			} 
// 		},
// 		// updateLastLoginTime.bind(null,data),
// 		// insertUserInDb.bind(null,data) 
// 		],(err,results)=>{
// 			console.log('inside result..All task done');
// 			if(err) {
// 				console.log('error',err);
// 				return;
// 			}
// 			console.log('result is',results.name);	
// 		});
// }

  // checkIfUserExists(profile.email, (error, userExists) => {
  //   if (userExists) {
  //     if (error) {
  //       return done(error, 'db error');
  //     }
  //     updateLastLoginTime(profile, (err) => {
  //       if (err) {
  //         return done(err, 'db error');
  //       }
  //       return done(null, userToken);
  //     });
  //   } else {
  //     insertUserInDb(profile, (err) => {
  //       if (err) { done(err); return; }
  //       done(null, userToken);
  //     });
  //   }
  //   return 'hi';
  // });
// }

// module.exports = {
//   updateUser,
// };

updateUser();;