function debounce(callback,delay){
  let time;
  const checkTimer=function(){
  clearTimeout(time);
  time=setTimeout(function(){
    callback.call(debounce);
    },delay);
  }
  return checkTimer
}

const func=debounce(search,1000);

function search(){
  const input=document.querySelector('.search');
  let array=document.getElementsByClassName('dd');
  for(let i=0;i<array.length;i++){
    array[i].style.border='3px solid green';
    if(input.value===''){
      array[i].style.display='block';
      array[i].style.border='3px solid red';
    }
    else if(array[i].innerHTML!==input.value){
      array[i].style.display='none';
      
    }
  }
}

document.querySelector('.search').addEventListener('input',func);