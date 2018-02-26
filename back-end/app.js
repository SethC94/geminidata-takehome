// This is a super simple local server to display parsed data
const http = require('http');
const fs = require('fs');
const d3 = require('d3-hierarchy');
const hostname = '127.0.0.1';
const port = 3000;

var ldif = require('ldif');
var newData = null;
var configPath = process.argv[2];

// parsed ldif stored in file
file = ldif.parseFile(configPath);

// FIXME: Not structuring json for D3 hierarchy
newData = d3.hierarchy(file)
  console.log(newData);


const server = http.createServer((req, res) =>{
  res.statusCode = 200;
  res.setHeader('conten-type','application/json');
  res.write(JSON.stringify(newData));
  res.end();
  });

server.listen(port, hostname, () =>{
console.log('Server started on port '+port);
});
