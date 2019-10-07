function changeStringToUpperCamelCase(string){
	let newString='',firstSymbWordInArray,remainStringInArray;
	let arrayWord=string.split(' ');
	for(let i=0;i<arrayWord.length;i++){
		firstSymbWordInArray=arrayWord[i][0].toUpperCase();
		remainStringInArray=arrayWord[i].substr(1,arrayWord[i].length-1);
		newString=newString+ firstSymbWordInArray+remainStringInArray+' ';
	}
	newString=newString.substr(0,newString.length-1);
	return newString
}

module.exports=changeStringToUpperCamelCase;
