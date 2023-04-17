const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const digital = n.toString().split('');  // в массив
  let maxNum = 0; 
  for (let i = 0; i < digital.length; i++) {
    const numWithoutDigit = Number(digital.slice(0, i).concat(digital.slice(i+1)).join('')); // удаляет переменную номер i и конвертирует обратно в число
    if (numWithoutDigit > maxNum) {
      maxNum = numWithoutDigit;
    }
  }
  return maxNum;
}

module.exports = {
  deleteDigit
};
