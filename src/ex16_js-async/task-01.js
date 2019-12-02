function analogFetch(method='GET',url,options){
  const request=new XMLHttpRequest();
  function postMethod(){
    request.open(options.method,url);
    if(option.heads){
      for(let key in options.headers){
        if(options.headers.hasOwnProperty(key)){
          request.setRequestHeader(key, options.headers[key]); 
        }
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