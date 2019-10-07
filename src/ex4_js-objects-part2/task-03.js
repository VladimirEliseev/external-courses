function deleteFirstAndLastSpace(string){
	let newString;
	let firstSpace=string.indexOf(' ');
	let lastSpace=string.lastIndexOf(' ');
	let firstPart=string.substr(0,firstSpace);
	let secondPart=string.substr(firstSpace+1, lastSpace-firstSpace-1);
	let thirdPart=string.substr(lastSpace+1,string.length-lastSpace-1);
	newString =firstPart+secondPart+ thirdPart;
	return newString
}

module.exports=deleteFirstAndLastSpace;