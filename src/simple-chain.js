const CustomError = require("../extensions/custom-error");

const chainMaker = {
  array: [],
  getLength() {
    this.array.join('~~').length();
    return this;
  },
  addLink(value) {
     this.array.push(`( ${value} )`);
     return this;
  },
  removeLink(position) {
    if(typeof position != 'number' || !Number.isInteger(position) || position < 0){
      this.array = [];
      throw new CustomError('');
    }else  {
      this.array.splice(position - 1, 1);
    }
    return this;
  },
  reverseChain() {
    this.array.reverse();
    return this;
  },
  finishChain() {
    let result = this.array.join('~~');
    this.array = [];
    return result;
  }
};

module.exports = chainMaker;
