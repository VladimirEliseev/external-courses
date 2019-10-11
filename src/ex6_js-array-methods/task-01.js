function slice(array, begin=0, end=array.length){
	let newArray=[],index=0;
	if(begin<0 && end>=0){
		begin+=array.length;
	}else if(begin>=0 && end<0){
		end+=array.length;
	}else if(begin<0 && end<0){
		begin+=array.length;
		end+=array.length;
	};

	for(let i=begin;i<end;i++){
		newArray[index]=array[i];
		index++;
	}
	return newArray
}

module.exports=slice;


