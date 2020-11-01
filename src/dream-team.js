const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  //
  if(!(members instanceof Array)){
      //console.log(members);
      //console.log(typeof members);
      
      return false;
  }
  let str = '';
  let memberNames = [];
  for(let j = 0; j < members.length; j++){
      if(typeof members[j] == 'string'){
           memberNames.push(members[j].trim().charAt(0).toLocaleUpperCase());
      }
  }
 
 // console.log(members);
  memberNames.sort();

 // console.log(str);
return memberNames.join('');
throw new CustomError('Not implemented');
};
