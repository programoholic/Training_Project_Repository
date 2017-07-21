const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  contactPoints: ['0.0.0.0'],
  keyspace: 'calvin',
});

function getData(done) {

	const qry= `SELECT * from users where username='ceanstackdev@gmail.com'`;

	client.execute(qry,(err,result) =>{

		if(err)
		{
			return done(err,'unable to get data');
		}
	done(null,result.rows);	
	});
}

module.exports= {

	getData
};