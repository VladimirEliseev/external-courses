function enterStrInAnotherStr(string1,string2, numberWord){
	let arrayWord,newString='';
	arrayWord=string1.split(' ')
  for(let i=0;i<arrayWord.length;i++){
  	if(i!==numberWord){
  		newString+=arrayWord[i]+' ';
  	}else{
        newString+=arrayWord[i]+' '+string2+' ';
  	}
  }
  newString=newString.trimRight();
  return newString
}

module.exports=enterStrInAnotherStr;
