const { restore } = require("sinon");
const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if(arr instanceof Array){
      return arr.reduce((max, item)=>{
        return 1 + Math.max(max, this.calculateDepth(item));
      });
    }else{
      return -1;
    }
  } 
};

// return 1 + (arr instanceof Array ? arr.reduce(function(max, item) {
//   return Math.max(max, calculateDepth(item));
// }, 0) : -1);