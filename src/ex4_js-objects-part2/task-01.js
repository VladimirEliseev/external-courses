function findProp(prop,object){
  for(let key in object){
    if(!object.hasOwnProperty(key) && key===prop){
      return object[prop]
    }
  }
  return undefined
}

module.exports=findProp;
