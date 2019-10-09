function createCopyObject(object){
	const newObject;
  for(let key in object){
  	newObject[key]=object[key];
  }
	return newObject
}

module.exports=createCopyObject;