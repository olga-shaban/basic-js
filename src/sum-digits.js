const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  if (n<0) {
    n = -n;
}
let result = 0;
while (n>0) {
  result = result + n % 10;
  n = Math.floor(n / 10);      
}
let res2=0;
if (result>9) {
  while (result>0) {
  res2 = res2 + result % 10;
  result = Math.floor(result / 10);      
}}
else {
  res2 = result;
}
  return res2; 
}

module.exports = {
  getSumOfDigits
};
