function checkPropObject(string, object){
	const copyObject=object;
  for(let key in object){
  	if(key===string){
  		return object;
  	}
	}
	copyObject[string]='new';
	return object;
}

module.exports=checkPropObject;