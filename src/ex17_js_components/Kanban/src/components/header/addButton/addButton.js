export function addBacklog(){
  let isInput=document.querySelector('.input');
  if(isInput===null){
    let input=document.createElement('input');
    input.className='input';
    mainTasks[0].append(input);
    input.focus();
    boards[0].style.height=boards[0].offsetHeight+30+'px';
    mainTasks[0].style.height=boards[0].offsetHeight-50+'px';
    buttonAddTasks[1].disabled=false;
    buttonAddTasks[1].style.pointerEvents='auto';
    buttonAddTasks[1].style.color='#3b3737';
    }
  document.getElementsByClassName('input')[0].addEventListener('blur',saveBacklog);
}

export function addReady(){
  let readyTasksIndex=[];
  let isSelect=document.querySelector('.input');
  if(isSelect===null){
    let select=document.createElement('select');
    select.className='input';
    mainTasks[1].append(select);
    let defaultOption=document.createElement('option');
    defaultOption.className='option';
    select.appendChild(defaultOption);
    defaultOption.innerHTML='Выберите задачу';
    defaultOption.disabled='disabled';
    buttonAddTasks[2].disabled=false;
    buttonAddTasks[2].style.pointerEvents='auto';
    buttonAddTasks[2].style.color='#3b3737';
  for(let i=0;i<backlogTasks.length;i++){
    readyTasksIndex[i]=document.createElement('option');
    readyTasksIndex[i].className='option';
    select.appendChild(readyTasksIndex[i]);
    readyTasksIndex[i].innerHTML=backlogTasks[i];
    buttonAddTasks[2].disabled=false;
  }
  boards[1].style.height=boards[1].offsetHeight+30+'px';
  mainTasks[1].style.height=boards[1].offsetHeight-50+'px';
  }
  document.getElementsByClassName('input')[0].addEventListener('blur',saveReady);
}

export function addInprocess(){
  let inProcessTasksIndex=[];
  let isInprocess=document.querySelector('.input');
  if(isInprocess===null){
    let select=document.createElement('select');
    select.className='input';
    mainTasks[2].append(select);
    let defaultOption=document.createElement('option');
    defaultOption.className='option';
    select.appendChild(defaultOption);
    defaultOption.innerHTML='Выберите задачу';
    defaultOption.disabled='disabled';
    buttonAddTasks[3].disabled=false;
    buttonAddTasks[3].style.pointerEvents='auto';
    buttonAddTasks[3].style.color='#3b3737';
  for(let i=0;i<readyTasks.length;i++){
    inProcessTasksIndex[i]=document.createElement('option');
    inProcessTasksIndex[i].className='option';
    select.appendChild(inProcessTasksIndex[i]);
    inProcessTasksIndex[i].innerHTML=readyTasks[i];
  }
  boards[2].style.height=boards[2].offsetHeight+30+'px';
  mainTasks[2].style.height=boards[2].offsetHeight-50+'px';
  }
  document.getElementsByClassName('input')[0].addEventListener('blur',saveInprocess);
}

export function addFinished(){
  let finishedTasksIndex=[];
  let isFinished=document.querySelector('.input');
  if(isFinished===null){
    let select=document.createElement('select');
    select.className='input';
    mainTasks[3].append(select);
    let defaultOption=document.createElement('option');
    defaultOption.className='option';
    select.appendChild(defaultOption);
    defaultOption.innerHTML='Выберите задачу';
    defaultOption.disabled='disabled';
  for(let i=0;i<inProcessTasks.length;i++){
    finishedTasksIndex[i]=document.createElement('option');
    finishedTasksIndex[i].className='option';
    select.appendChild(finishedTasksIndex[i]);
    finishedTasksIndex[i].innerHTML=inProcessTasks[i];
  }
  boards[3].style.height=boards[3].offsetHeight+30+'px';
  mainTasks[3].style.height=boards[3].offsetHeight-50+'px';
  }

  document.getElementsByClassName('input')[0].addEventListener('blur',saveFinished);
}