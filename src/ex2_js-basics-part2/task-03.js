function getEvenAndOddElementArray(array){
	let even=0,odd=0,zero=0;
	for (let i=0;i<array.length;i++){
		if(array[i]===0){
			zero++;
		}
         else if((array[i]!==null) && ((array[i]%2)===0)){
         	even++;
         }
         else if((array[i]!==null) && (array[i]%2)===1){
         	odd++;
         }
		}
	return [even,odd,zero]
}
module.exports =getEvenAndOddElementArray;