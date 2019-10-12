'use strict';
function filter(array, callback){
	let item;
	const newArray=[];
	for(let i=0;i<array.length;i++){
		item=array[i];
		if(callback(item, i, array)){
			newArray[newArray.length]=item;
		}
	}
	return newArray
}

module.exports=filter;

	