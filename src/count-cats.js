const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  var sum = 0;
if(matrix == undefined || matrix.length == 0 ){
    return sum;
} else{
    for(var i=0; i < matrix.length; i++){
        for(var j=0; j < matrix[i].length; j++){  
          if(matrix[i][j] === '^^'){
            sum = sum + 1; 
          }
        }
      }
      return sum;
}
  throw new CustomError('Not implemented');
  
};
