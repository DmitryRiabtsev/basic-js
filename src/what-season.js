const CustomError = require("../extensions/custom-error");
module.exports = function getSeason(date) {
	if (date == undefined) {
		return 'Unable to determine the time of year!';
	}
	let year = date.getFullYear();
	let month = date.getMonth();
	let day = date.getDate();
	//console.log(month);
	//console.log(month);
	//console.log("day "+ day);
	let SEASON_BASE = {
		"0":"winter",
		"1":"winter",
		"2":"spring",
		"3":"spring",
		"4":"spring",
		"5":"summer",
		"6":"summer",
		"7":"summer",
		"8":"autumn",
		"9":"autumn",
		"10":"autumn",
		"11":"winter",
	}
	if( Object.prototype.toString.call(date) !== "[object Date]"){
		throw new error('THROWN');
	} else {
		for(let a in SEASON_BASE){
			if(month == a){
				return SEASON_BASE[a];
			}
		}
		
	}
	
  throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
