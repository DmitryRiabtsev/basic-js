const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let newArr = [];
  let continueRequired = false;
  let prevIsDead = false;
  
for(let i = 0; i < arr.length; i++){
  if(continueRequired) {
    continueRequired = false;
    continue;
  }
  if(arr[i] == "--double-prev"){
    if(arr[i-1] !== undefined && !prevIsDead){
      newArr.push(arr[i-1]);
    }
  } else if(arr[i] == "--double-next"){
    if(arr[i+1] !== undefined){
      newArr.push(arr[i+1]);
    }
  } else if(arr[i] == "--discard-prev"){
    if(!prevIsDead) {
      newArr.pop();
    }
  } else if(arr[i] == "--discard-next"){
    continueRequired = true;
    prevIsDead = true;
  } else {
    newArr.push(arr[i]);
    prevIsDead = false;
  } 
};
return newArr;
throw new CustomError('Not implemented');
};
