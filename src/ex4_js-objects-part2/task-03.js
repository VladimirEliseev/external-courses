function deleteSpace(string){
	let newString;
	let firstSpace=string.indexOf(' ');
	let lastSpace=string.lastIndexOf(' ');
	newString=string.substr(0,firstSpace);
	newString+=string.substr(firstSpace+1, lastSpace-firstSpace-1);
  newString+=string.substr(lastSpace+1,string.length-lastSpace-1);
	return newString
}

module.exports=deleteSpace;