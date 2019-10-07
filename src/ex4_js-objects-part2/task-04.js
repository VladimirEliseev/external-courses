function changeFirstSymbInString(string){
	let newString;
	let firstSymb=string[0].toUpperCase();
	let remainString=string.substr(1,string.length-1);
	newString=firstSymb+remainString;
	return newString;
}

module.exports=changeFirstSymbInString;