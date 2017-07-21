const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
	
	const path=url.parse(req.url).pathname;

	const method=req.method; 

	  let body='';

	switch(method) {

		case 'POST' :

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
      a(name);
      res.end(JSON.stringify(data));
  });
			res.write("hello! Recieved  :  " + method + " Request ");
			break; 
			case '/hello' : res.write("hi ! Recieved " + method + " Request");
			break;
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
