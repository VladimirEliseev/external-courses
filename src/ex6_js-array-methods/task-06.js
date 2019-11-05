'use strict';
function reduce(array, callback,initialValue){
  let i=0, previousValue,currentValue;
  if(initialValue!==undefined){
    previousValue=initialValue;
  }else{
    previousValue=array[i];
    i++;
  }
  for(i;i<array.length;i++){
    currentValue=array[i];
    previousValue=callback(previousValue,currentValue,i,array);
  }
  return previousValue
}

module.exports=reduce;

	
