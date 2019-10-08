function getLowCamelCase(string){
	let newString;
	let arrayWord=string.split(' ');
	newString=arrayWord[0].toLowerCase();
	for(let i=1;i<arrayWord.length;i++){
		newString+=arrayWord[i][0].toUpperCase();
		newString+=arrayWord[i].substr(1,arrayWord[i].length-1).toLowerCase();
	}
	return newString
}

module.exports=getLowCamelCase;
