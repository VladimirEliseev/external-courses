function getMaxMeanArray(array){
	let max=array[0];
	for(let i=1;i<array.length;i++){
  	   	if(array[i]>max){
  	   		max=array[i];
  	   	}
	} 
	return max;
}
getMaxMeanArray([1,0,3]);
module.exports =getMaxMeanArray;