//get the ranNumb and turn into USA string value
// var http = require('http');
//IMPORT
//var convertUSD = require('./USConversion.js');

function convertFunc(ranNumb) {
  //var value = ranNumb;
 //get the number and turn it the the dollar format and return it as a string
  var balance = '$' + ranNumb.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
  //console.log(num);
  return balance;
 }


module.exports = convertFunc;
