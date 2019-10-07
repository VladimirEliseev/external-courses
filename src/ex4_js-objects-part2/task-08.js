function changeStringToLowCamelCase(string){
	let newString='',firstSymbWordInArray,remainStringInArray;
	let arrayWord=string.split(' ');
	newString+=arrayWord[0].toLowerCase();
	for(let i=1;i<arrayWord.length;i++){
		firstSymbWordInArray=arrayWord[i][0].toUpperCase();
		remainStringInArray=arrayWord[i].substr(1,arrayWord[i].length-1);
		newString+= firstSymbWordInArray+remainStringInArray.toLowerCase();
	}
	return newString
}

module.exports=changeStringToLowCamelCase;
