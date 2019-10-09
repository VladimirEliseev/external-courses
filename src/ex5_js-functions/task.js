const calculator=(function(){
	let currentState=0;
	let start=true;
	const add=function(value=0){
    currentState+=value;
   	return add
   }

  const subtract=function(value=0){
  	if(start){
  		currentState=value;
  		start=false;
  	}else{
    currentState-=value;
    }
   	return subtract
  }

  const divide=function(value=0){
   	if(start){
    	currentState=value;
    	start=false;
    }else if(value!==0){
    	currentState/=value;
    }
   	return divide
  }

  const multiply=function(value=0){
   	if(start){
   		currentState=value;
   		start=false;
   	}else{
    	currentState*=value
    }
   	return multiply
  }	

  const getResult=function(){
   	return currentState
  }

  const reset=function(){
    return currentState=0;
  }
	return { add,subtract,divide,multiply, getResult,reset }
}());

module.exports=calculator;



