const http = require("http");
const url = require("url");
const server = http.createServer((req, response) => {
  
  const path=url.parse(req.url).pathname;

  const method=req.method; 

  switch(path) {

  	   case '/hi' :
  	                response.write("hello! Recieved : " + method + "Request ");
  	                break; 
  	   case '/hello' : response.write("hi ! Recieved " + method + "request");
  	                   break;
       default : response.write("Hi or Hello  recieved  : " + method + "request");
  }
  // response.write("Hello World");
  response.end();
  
  console.log("Hello World");

  console.log("req is :  ",req.url);

  console.log("method is :  ",req.method);
  

});

server.listen(3000);
console.log("Server is listening")