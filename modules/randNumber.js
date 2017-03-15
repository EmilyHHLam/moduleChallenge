


var ranNumb;
///random min = 100 , max 1000000
// minNumb = 100;
// maxNumb = 1000000;
function ranFunc(minNumb,maxNumb) {

  min = Math.ceil(minNumb);
  max = Math.floor(maxNumb);
  ranNumb = Math.floor(Math.random() * (maxNumb - minNumb)) + minNumb;

  return ranNumb;
}


module.exports = ranFunc;
