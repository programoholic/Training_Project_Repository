const http = require("http");
const url = require("url");
var qs = require('querystring');
const server = http.createServer((req, res) => {

    const urls =['/hi','/hello','/welcome','/ping','/test'];
	const path=url.parse(req.url).pathname;

	const method=req.method; 

	switch(path) {

		case '/hi' :
		res.write("hello! Recieved  :  " + method + " Request on path "+path);
		break; 
		case '/hello' : res.write("hi ! Recieved " + method + " Request on path : "+path);
		break;
        case '/welcome' : res.write("hi ! Recieved " + method + " Request on path :" +path);
		break;

		// case '/hello' : res.write("hi ! Recieved " + method + " Request");
		// break;
		// case '/hello' : res.write("hi ! Recieved " + method + " Request");
		// break;
		// case '/hello' : res.write("hi ! Recieved " + method + " Request");
		// break;
		// case '/hello' : res.write("hi ! Recieved " + method + " Request");
		// break;
		// case '/hello' : res.write("hi ! Recieved " + method + " Request");
		// break;
		// case '/hello' : res.write("hi ! Recieved " + method + " Request");
		// break;

		default :   


		res.writeHead(404, {"Content-Type": "text/html"});
		res.write("Error 404 : Path not found");
	}

	res.end();
	console.log("Hello World");

	console.log("req is :  ",req.url);

	console.log("method is :  ",req.method);
}).listen(3000);
console.log("listening to server");