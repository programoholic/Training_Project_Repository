const express = require('express');
const app = express();

app.get("/",(req,res)=>{

    let x=Math.random().toString(36).slice(2).toUpperCase();
	res.send("Hi token "+x);
});

app.listen(4500,function(){

	   console.log("listening at port : 4500");
})