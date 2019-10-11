function every(array, callback){
	for(let i=0;i<array.length;i++){
		item=array[i];
		if(!callback(item, i, array)){
			return false
		}
	}
	return true
}

module.exports=every;

	