const http = require("http");
const url = require("url");
var qs = require('querystring');

const server = http.createServer((req, res) => {
  
  const path=url.parse(req.url).pathname;

  const method=req.method; 
   
   let body='';
   let data='';
   let name='';

   if (req.method == 'POST') {

       body = '';

    req.on('data', function(chunk) {
      body += chunk;
    });
     

    req.on('end', function() {
       data = qs.parse(body);
      // now you can access `data.email` and `data.password`
       console.log("name is : " +data.name);
       name=data.name;
       console.log(name); 

      
      // res.write(data.name);
      res.writeHead(200);
      
       // a(name);
       res.end("hi " + data.name);
    });
   
     // const a= function(data){
    

     //      console.log("names :"+ data);
     //      res.write("Hi  : " + data);

     // }
    
     


        // let body = '';

        // req.on('data', function (data) {
        //     body += data;

           
        //     if (body.length > 1e6)
        //         req.connection.destroy();
        // });

        // req.on('end', function () {
        //     let post = qs.parse(body);
        //     // use post['blah'], etc.
        //   console.log(post.name);

        // });
    }
//    if(method==='POST')
//    {
//        body=req.body.name;
//        console.log(body);
//    } 

// //     http.get({
// //   hostname: 'localhost',
// //   port: 80,
// //   path: '/',
// //   agent: false  // create a new agent just for this one request
// // }, (res) => {
      
// //       res.write("get is made");;
// //       res.end()
// // });

//   switch(path) {

//        case '/hi' :
//                     response.write("hello! Recieved  :  " + method + " Request ");
//                     break; 
//        case '/hello' : response.write("hi ! Recieved " + method + " Request");
//                        break;
//        // default : response.write("Hi or Hello  recieved  : " + method + " Request");
//   }
//   // response.write("Hello World");
//   response.end();
  
//   console.log("Hello World");

//   console.log("req is :  ",req.url);

//   console.log("method is :  ",req.method);
  

});

server.listen(3000);
console.log("Server is listening")