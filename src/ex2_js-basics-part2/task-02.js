function getArray(array){
  for(let i=0;i<array.length;i++)
  	console.log(array[i]);
   return array.length;
}
getArray([0,1]);
module.exports =getArray;