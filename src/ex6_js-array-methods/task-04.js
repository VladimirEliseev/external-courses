'use strict';
function filter(array, callback){
  const newArray=[];
  for(let i=0;i<array.length;i++){
    if(callback(array[i], i, array)){
      newArray[newArray.length]=item;
    }
  }
  return newArray
}

module.exports=filter;

	
