function changeFirstSymb(string){
	let newString=string[0].toUpperCase();
	let remainString=string.substr(1,string.length-1);
	newString+=remainString;
	return newString;
}

module.exports=changeFirstSymb;