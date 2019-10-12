'use strict';
function map(array, callback){
	let item;
	const newArray=[];
	for(let i=0;i<array.length;i++){
		item=array[i];
		newArray[i]=callback(item,i,array);
	}
	return newArray
}

module.exports=map;

	