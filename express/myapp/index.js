/**
 * Created by user on 31/5/17.
 */


const express= require('express');
const app= express();
const port=4040;
const fs=require('fs');

app.use(express.static('public'));

app.get('/users', function (req,res) {

    const name=req.query.name;
    const age=req.query.age;

    var person={
        name: name,
    age: age
};

    savePerson(person,function (err) {
        if(err) {

            res.status(400).send('user not Saved');
            return;
        }
        res.send('User Saved');
    });
});

function  savePerson(person,callback) {

    fs.writeFile('./public/person.json',JSON.stringify(person),callback);
}
app.listen('server is up and running at port  :  %s',port);