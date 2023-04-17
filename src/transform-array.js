const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!arr instanceof Array) {
    throw Error('Not an array');
  }

  if (!Array.isArray(arr)) {
    throw Error("'arr' parameter must be an instance of the Array!");
  }
  let arr2 = [];

  for (let i = 0; i < arr.length; i++) {

    switch (arr[i]) {
      case '--discard-next':
        if (arr[i + 2] === '--double-prev' || arr[i + 2] === '--discard-prev') {
          i++;
        }
        i++;
        break;

      case '--discard-prev':
        arr2.pop();
        break;

      case '--double-next':
        if (i < arr.length - 1) {
          arr2.push(arr[i + 1]);
          arr2.push(arr[i + 1]);
        }
        i++;
        break;

      case '--double-prev':
        if (i !== 0) {
          arr2.push(arr[i - 1]);
        }
        break;
      default: arr2.push(arr[i]);
    }
  }

  return arr2;
}

module.exports = {
  transform
};
