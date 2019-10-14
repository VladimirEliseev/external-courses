function deleteSpace(string){
	let newString;
  if(string[0]===' ' && string[string.length-1]===' '){
    newString=string.substr(1,string.length-2)
  }else if (string[0]===' '){
    newString=string.substr(1,string.length-1)
  }else if(string[string.length-1]===' '){
    newString=string.substr(0,string.length-2)
  }else{
    newString=string;
  }
	return newString
}

module.exports=deleteSpace;
