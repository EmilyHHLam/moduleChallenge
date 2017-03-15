var http = require('http');
// var cat = require('./modules/M1.js');


var acctBal= require("./modules/acctBalance.js");

//specity for
var server = http.createServer(function(request, response){
    // 1. cacluate the balance as a string
    var accountBalance = acctBal();
   // 2. print out this string
   response.writeHead(200);
   response.write(accountBalance);
   response.end();
});

server.listen(3000);

console.log("Listening");
