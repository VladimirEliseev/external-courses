function getUpperCamelCase(string){
  let newString='', remainString;
  let arrayWord=string.split(' ');
  for(let i=0;i<arrayWord.length;i++){
    newString+=arrayWord[i][0].toUpperCase();
    remainString=arrayWord[i].substr(1,arrayWord[i].length-1);
    newString+=remainString+' ';
  }
  newString=newString.substr(0,newString.length-1);
  return newString
}

module.exports= getUpperCamelCase;
