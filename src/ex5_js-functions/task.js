const calculator=(function(){
  let currentState=0;
	
  const add=function(value=0){
    currentState+=value;
    return add
}
  
  const subtract=function(value=0){
    currentState-=value;
    return subtract
  }

  const divide=function(value=1){
    currentState/=value;
    return divide
  }

  const multiply=function(value=1){
    currentState*=value
    return multiply
  }

  const getResult=function(){
    return currentState
  }

  const reset=function(){
    currentState=0;
    return currentState
  }
  return {add,subtract,divide,multiply, getResult, reset}
}());

module.exports=calculator;



