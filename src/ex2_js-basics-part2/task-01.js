function getValue(value){
  if(typeof value ==='number' && isNaN(value)===false){
  	return 'number';
  }
  else if (typeof value ==='string'){
  	return 'string';
  }
  return undefined;
}
module.exports =getValue;