function getLimitString(string,number){
  let newString;
  if(string.length>number){
     newString=string.substr(0,number-1)+'…';
  }
  return newString
}

module.exports=getLimitString;
