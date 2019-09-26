function getValue(mean){
  if(typeof mean =='number')
  	return 'number';
  else if (typeof mean =='string')
  	return 'string';
  else return undefined;
}
getValue(5);
module.exports =getValue;