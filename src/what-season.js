const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */

function getSeason(date) {
 // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
 
  const seasons = ['spring', 'summer', 'autumn|fall', 'winter'];
let mm = date.getMonth()+1; // месяц 1-12
switch (mm) {
  //winter
  case 12:
    return seasons[3] ;
    break;
    case 1:
      return seasons[3] ;
    break;
    case 2:
      return seasons[3];
    break;
    // spring
    case 3:
      return seasons[0];
    break;
    case 4:
      return seasons[0];
    break;
    case 5:
      return seasons[0];
    break;
     // summer
     case 6:
      return seasons[1];
    break;
    case 7:
      return seasons[1];
    break;
    case 8:
      return seasons[1];
    break;
    // autum
    case 9:
      return seasons[2];
    break;
    case 10:
      return seasons[2];
    break;
    case 11:
      return seasons[2];
    break;

  default:
    return "Invalid date!";
   
}
}

module.exports = {
  getSeason
};
