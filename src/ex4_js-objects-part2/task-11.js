function calcCountEverySymb(string){
	let newString='',arraySymbol=[],arrayCountEverySymbol=[],bool=false,countSymbol=0;
  for(let i=0;i<string.length;i++){
  	for(let j=0;j<arraySymbol.length;j++){
  		if(string[i]===arraySymbol[j] && string[i]!==' '){
  			bool=true;
  			arrayCountEverySymbol[j]+=1;
  		}
  	}
  		if(!bool && string[i]!==' '){
  			arraySymbol[countSymbol]=string[i];
  			arrayCountEverySymbol[countSymbol]=1;
  			countSymbol++;
  		}
  		bool=false;
  }
  for(let i=0;i<arraySymbol.length;i++){
  	console.log(arraySymbol[i]+ ':' +arrayCountEverySymbol[i]);
  }
}

module.exports=calcCountEverySymb;
