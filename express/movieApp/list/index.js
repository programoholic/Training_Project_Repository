const express = require('express');
const router = express.Router();
const favourite= require('./favourites');

router.use((req,res,next) => {


	console.log( " inside main index : ");
	next();
});

 router.use('/favourites',favourite);

 module.exports =router;