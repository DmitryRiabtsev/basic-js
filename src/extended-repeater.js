const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  if(options.repeatTimes == undefined && options.additionRepeatTimes == undefined){
    return str + options.addition ;
  } else {
    let arrayString =[];
  let arrayAddition = [];
   for(let i = 1; i <= options.repeatTimes; i++){
     arrayString.push(str)
   }

   for(let j = 1; j <= options.additionRepeatTimes; j++){
     if(options.addition == null){
      arrayAddition.push('null')
     }else{
      arrayAddition.push(options.addition)
     }
    
  }
   let newArray = arrayString.map((item)=>{
      return item + arrayAddition.join(`${options.additionSeparator}`); 
   });
   if(typeof options.separator != "string"){
     return newArray.join('+');
   } else if(options.separator == undefined){
    return newArray.join('');
   }else{
     return newArray.join(`${options.separator.toString()}`);
   }
  }
  
};
  