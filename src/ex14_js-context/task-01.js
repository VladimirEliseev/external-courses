const calculator={
  currentState:0,
  add:function(value=0){
    this.currentState+=value;
    return this
  },
  
  subtract:function(value=0){
    this.currentState-=value;
    return this
  },

  divide:function(value){
    if(value!==undefined && value!==0){
      this.currentState/=value;
    }
    return this
  },

  multiply:function(value){
    if(value!==undefined){
      this.currentState*=value;
    }
    return this
  },

  setState:function(value){
    if(value!==undefined){
      this.currentState=value;
    }
    return this
  },

  fetchData:function(callback){
    return callback.call(this, 500);
  },

  getResult:function(){
    return this.currentState
  },

  reset:function(){
    this.currentState=0;
    return this
  }
};

module.exports=calculator;

