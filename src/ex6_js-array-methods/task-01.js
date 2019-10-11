function slice(array, begin=0, end=array.length){
	let newArray=[],index=0,newBegin=begin, newEnd=end;
	if(begin<0 && end>=0){
		newBegin+=array.length;
	}else if(begin>=0 && end<0){
		newEnd+=array.length;
	}else if(begin<0 && end<0){
		newBegin+=array.length;
		newEnd+=array.length;
	};

	for(let i=newBegin;i<newEnd;i++){
		newArray[index]=array[i];
		index++;
	}
	return newArray
}

module.exports=slice;


