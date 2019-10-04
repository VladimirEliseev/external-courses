function checkPropObject(string, object){
  for(let key in object){
  	if(key===string){
  		return object;
  	}
	}
	object[string]='new';
	return object;
}

module.exports=checkPropObject;