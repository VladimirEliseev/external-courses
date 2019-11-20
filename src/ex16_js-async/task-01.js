function analogFetch(url,options){
  const request=new XMLHttpRequest();
  function postMethod(){
    request.open(options.method,url);
    if(option.heads){
      for(let key in options.heads){
          request.setRequestHeader(key, options.heads[key]); 
      }
    }
    request.send(options.body);
  }

  function getMethod(){
    request.open('GET',url);
    request.send();
  }
  const promise=new Promise(function(resolve,reject){
    if(options){
      postMethod();
    }else{
      getMethod();
    }

  if(request.status>=200 && request.status<300){
    resolve(request.responseText);
  }else{
    reject(request.status+':'+request.statusText);
  }
});
  return promise
}
