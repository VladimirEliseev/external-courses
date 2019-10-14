function deleteSpace(string){
<<<<<<< HEAD
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
=======
  let newString;
  let firstSpace=string.indexOf(' ');
  let lastSpace=string.lastIndexOf(' ');
  newString=string.substr(0,firstSpace);
  newString+=string.substr(firstSpace+1, lastSpace-firstSpace-1);
  newString+=string.substr(lastSpace+1,string.length-lastSpace-1);
  return newString
>>>>>>> f7b961cbbc8e9b7a1699a9c688d17698f28169b0
}

module.exports=deleteSpace;
