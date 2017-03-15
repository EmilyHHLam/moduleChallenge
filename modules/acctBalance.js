
//call the randNumber.js and USConversation.js

var ranFunc = require('./randNumber.js');
var convertFunc = require('./USConversion.js');

function acctBal() {
//get the random number between 100 and 1000000
  var randNumb = ranFunc(100,1000000);
  //format the number into the currency format
  var currNumb = convertFunc(randNumb);

  return ("Account Balance: \n" +currNumb);
}

module.exports = acctBal;
