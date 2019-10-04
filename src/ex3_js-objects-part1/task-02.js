function getObject(object){
  for(let key in object){
  	if(key){
  	console.log(key, ':', object[key]);
    }
  }
}

module.exports=getObject;
