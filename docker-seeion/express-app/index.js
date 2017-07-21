const express = require('express')
const app = express();
 const db= require('./express.controller');

app.get('/', function (req, res) {
  // res.send('Hello World!')

  db.getData((err,result)=>{

  	  if(err) {

  	  	   res.status(500).send(err);
  	  }
  	res.status(200).send(result);  
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

 // load balancer
 // sudo docker-compose scale calvin=3
// 3000:3000 
//1: App port
//2: container port
//docker-machine
// -d 
// docker-compose file compose
//docker-compose up
//docker-compose down
//docker-compose 


// docker run hello-world
//  1997  docker run --help
//  1998  clear
//  1999  docker --version
//  2000  docker -compose --version
//  2001  sudo docker -compose --version
//  2002  clear
//  2003  docker -compose --version
//  2004  docker -compose -version
//  2005  sudo -i https://github.com/docker/compose/releases/download/1.14.0/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose
//  2006  sudo -i
//  2007  docker-compose --version
//  2008  sudo docker-compose --version
//  2009  sudo -i
//  2010  cd workspace/
//  2011  ls
//  2012  cd Project/
//  2013  ls
//  2014  mkdir docker-seeion
//  2015  cd docker-seeion/
//  2016  npm init
//  2017  ls
//  2018  touch index.js
//  2019  clear
//  2020  touch index.js
//  2021  subl .
//  2022  node index
//  2023  touch Dockerfile
//  2024  docker run basavraj-stackroute
//  2025  sudo docker run basavraj-stackroute
//  2026  npm start
//  2027  docker build -t  .
//  2028  ls
//  2029  docker build   . -t "test"
//  2030  sudo docker build   . -t "test"
//  2031  docker run -d c6c48d02fbca
//  2032  sudo docker run -d c6c48d02fbca
//  2033  docker run
//  2034  docker run test
//  2035  sudo docker run test
//  2036  sudo docker images
//  2037  sudo docker status
//  2038  sudo docker info
//  2039  docker ps
//  2040  sudo docker ps
//  2041  sudo docker ps -k
//  2042  sudo docker ps-k
//  2043  sudo docker ps -a
//  2044  ls
//  2045  mkdir express-app
//  2046  cd express-app/
//  2047  npm init -y
//  2048  touch index.js
//  2049  subl .
//  2050  npm install express
//  2051  npm start
//  2052  touch Dockerfile
//  2053  ls
//  2054  docker build   . -t "express"
//  2055  sudo docker build   . -t "express"
//  2056  sudo docker run express
//  2057  sudo docker build   . -t "express"
//  2058  sudo docker run express
//  2059  sudo docker run -p 3000:3000 express
//  2060  sudo docker run -p 3000:4200 express
//  2061  sudo docker run -p 4200:4200 express
//  2062  sudo docker run -p 3000:3000 express
//  2063  docker build   . -t "express"
//  2064  sudo docker build   . -t "express"
//  2065  sudo docker run -p 3000:3000 express
//  2066  npm start
//  2067  sudo docker build   . -t "express"
//  2068  sudo docker run -p 3000:3000 express
//  2069  docker docker pull zmarcantel/cassandra
//  2070  sudo  docker pull zmarcantel/cassandra
//  2071  sudo  docker pull cassandra
//  2072  sudo docker images
//  2073  sudo docker ps -a
//  2074  sudo docker run -p 3000:3000 express -d
//  2075  sudo docker run -d -p 3000:3000 express -d
//  2076  sudo docker run -d -p 3000:3000 express 
//  2077  sudo docker ps -a
//  2078  sudo docker run stop  express 
//  2079  sudo docker stop  express 
//  2080  sudo docker ps -a
//  2081  history
