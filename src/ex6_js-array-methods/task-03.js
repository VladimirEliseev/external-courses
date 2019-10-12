'use strict';
function every(array, callback){
  let item;
  for(let i=0;i<array.length;i++){
    item=array[i];
    if(!callback(item, i, array)){
      return false
     }
   }
  return true
}

module.exports=every;

	
