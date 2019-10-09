function getObject(object){
  for(let key in object){
  	console.log(key, ':', object[key]);
  }
}

module.exports=getObject;
