function calcCountEverySymb(string){
	let newString='',arraySymbol=[],arrayCount=[],bool=false,countSymbol=0;
  for(let i=0;i<string.length;i++){
  	for(let j=0;j<arraySymbol.length;j++){
  		if(string[i]===arraySymbol[j] && string[i]!==' '){
  			bool=true;
  			arrayCount[j]+=1;
  		}
  	}
  		if(!bool && string[i]!==' '){
  			arraySymbol[countSymbol]=string[i];
  			arrayCount[countSymbol]=1;
  			countSymbol++;
  		}
  		bool=false;
  }
  for(let i=0;i<arraySymbol.length;i++){
  	console.log(arraySymbol[i]+ ':' +arrayCount[i]);
  }
}

module.exports=calcCountEverySymb;
