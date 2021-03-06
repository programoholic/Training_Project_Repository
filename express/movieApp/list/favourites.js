const express =require('express');
const router=express.Router();
const fs=require('fs');
const db=require('../db.json');
router.use(function(req, res, next) { 
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 next();
});
router.route('/')
   .get((req,res) =>{

   	fs.readFile('db.json','utf-8',(err,data) => {

   		if(err) throw err;
   		res.send(JSON.parse(data));
   	});
   })
   .post((req,res)=> {

     console.log(" printing body :",req.body);
     
   	db.push(req.body);
   	fs.writeFile('./db.json',JSON.stringify(db),(err,data)=>{
   		if(err) throw err;
   		res.send('movie added');
   	});
   });
  
  router.route('/:id')
  .put((req, res) => {
    const newMovie = req.body;
    db.forEach((movie, index) => {
      if (movie.id == req.params.id) {
        db.splice(index, 1, newMovie);
      }
    });
    fs.writeFile('./db.json', JSON.stringify(db), (err, data) => {
      if (err) throw err;
      res.send('Movie modified!');
    });
  })
  .delete((req, res) => {
    db.forEach((movie, index) => {
      if (movie.id == req.params.id) {
        db.splice(index, 1);
      }
    });
    fs.writeFile('./db.json', JSON.stringify(db), (err, data) => {
      if (err) throw err;
      res.send('Removed From Favourites!');
    });
  });

   module.exports=router;
