function getArray(array){
  for(let i=0;i<array.length;i++){
  	console.log(array[i]);
  }
  	console.log(array.length);
   return array
}
getArray([0,1]);
module.exports =getArray;