function checkPropObject(string, object){
  for(let key in object){
    if(key===string){
      return true;
    }
  }
  return false;
}

module.exports=checkPropObject;
