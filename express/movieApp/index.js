const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const api=require('./list/index');
const router = express.Router();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use((req,res,next) =>{

	console.log('Stared Working.....');
	next();
});

const PORT = process.env.PORT || 3000;
// app.get('/',(req,res)=>{

// 	res.send('hello world');
// });

app.use('/api',api);
app.listen(PORT,()=>	{

	  console.log('express running on port',PORT);
});
