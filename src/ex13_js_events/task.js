let arrow=document.querySelector('.arrow');
let blockPersonalInfo=document.querySelector('.personalInfo');
let boards=document.getElementsByClassName('board');
let mainTasks=document.getElementsByClassName('mainBoard');
let buttonAddTasks=document.getElementsByClassName('addCard');
let listTasks=document.getElementsByClassName('listTask');
let countBacklog=0;
let backlogTasks=[],readyTasks=[],inProcessTasks=[],finishedTasks=[];
let onDropDown=false;

function loadTask(){
  backlogTasks=JSON.parse(localStorage.getItem('keyBacklog'));
  readyTasks=JSON.parse(localStorage.getItem('keyReady'));
  inProcessTasks=JSON.parse(localStorage.getItem('keyInprocess'));
  finishedTasks=JSON.parse(localStorage.getItem('keyFinished'));
    if(backlogTasks===null){
      backlogTasks=[];
      buttonAddTasks[1].disabled=true;
      buttonAddTasks[1].style.color='#9c9595';
      buttonAddTasks[1].style.pointerEvents='none';
    }
    if(readyTasks===null){
      readyTasks=[];
      buttonAddTasks[2].disabled=true;
      buttonAddTasks[2].style.color='#9c9595';
      buttonAddTasks[2].style.pointerEvents='none';
    }
    if(inProcessTasks===null){
      inProcessTasks=[];
      buttonAddTasks[3].disabled=true;
      buttonAddTasks[3].style.color='#9c9595';
      buttonAddTasks[3].style.pointerEvents='none';
    }
    if(finishedTasks===null){
      finishedTasks=[];
    }
    let tasksBacklogIndex=[];
    for(let i=0;i<backlogTasks.length;i++){
      tasksBacklogIndex[i]=document.createElement('dd');
      tasksBacklogIndex[i].className='ddBacklog';
      listTasks[0].append(tasksBacklogIndex[i]);
      tasksBacklogIndex[i].innerHTML=backlogTasks[i];
      boards[0].style.height=boards[0].offsetHeight+tasksBacklogIndex[i].offsetHeight+'px';
      mainTasks[0].style.height=boards[0].offsetHeight-50+'px';
    }
    let tasksReadyIndex=[];
    for(let i=0;i<readyTasks.length;i++){
      tasksReadyIndex[i]=document.createElement('dd');
      tasksReadyIndex[i].className='ddReady';
      listTasks[1].append(tasksReadyIndex[i]);
      tasksReadyIndex[i].innerHTML=readyTasks[i];
      boards[1].style.height=boards[1].offsetHeight+tasksReadyIndex[i].offsetHeight+'px';
      mainTasks[1].style.height=boards[1].offsetHeight-50+'px';
    }
    let tasksInProcessIndex=[];
    for(let i=0;i<inProcessTasks.length;i++){
      tasksInProcessIndex[i]=document.createElement('dd');
      tasksInProcessIndex[i].className='ddInprocess';
      listTasks[2].append(tasksInProcessIndex[i]);
      tasksInProcessIndex[i].innerHTML=inProcessTasks[i];
      boards[2].style.height=boards[2].offsetHeight+tasksInProcessIndex[i].offsetHeight+'px';
      mainTasks[2].style.height=boards[2].offsetHeight-50+'px';
    }
    let tasksFinishedIndex=[];
    for(let i=0;i<finishedTasks.length;i++){
      tasksFinishedIndex[i]=document.createElement('dd');
      tasksFinishedIndex[i].className='ddFinished';
      listTasks[3].append(tasksFinishedIndex[i]);
      tasksFinishedIndex[i].innerHTML=finishedTasks[i];
      boards[3].style.height=boards[3].offsetHeight+tasksFinishedIndex[i].offsetHeight+'px';
      mainTasks[3].style.height=boards[3].offsetHeight-50+'px';
    }
}
function deleteBacklog(){
  let readyTasks= document.getElementsByClassName('ddBacklog');
    for(let i=0;i<backlogTasks.length;i++){
      readyTasks[i].innerHTML=backlogTasks[i];
    }
    if(backlogTasks.length===0){
      buttonAddTasks[1].disabled=true;
      buttonAddTasks[1].style.pointerEvents='none';
      buttonAddTasks[1].style.color='#9c9595';
      let delElem=document.getElementsByClassName('ddBacklog')[0];
      boards[0].style.height=boards[0].offsetHeight-delElem.offsetHeight-15+'px';
      mainTasks[0].style.height=boards[0].offsetHeight-50+'px';
      delElem.remove();
      
    }else{
      let delElem=document.getElementsByClassName('ddBacklog')[backlogTasks.length];
      boards[0].style.height=boards[0].offsetHeight-delElem.offsetHeight-15+'px';
      mainTasks[0].style.height=boards[0].offsetHeight-50+'px';
      delElem.remove();
    }
     
}

function deleteReady(){
  let inProcessTasks= document.getElementsByClassName('ddReady');
    for(let i=0;i<readyTasks.length;i++){
      inProcessTasks[i].innerHTML=readyTasks[i];
    }
    if(readyTasks.length===0){
      buttonAddTasks[2].disabled=true;
      buttonAddTasks[2].style.pointerEvents='none';
      buttonAddTasks[2].style.color='#9c9595';
      let delElem=document.getElementsByClassName('ddReady')[0];
      boards[1].style.height=boards[1].offsetHeight-delElem.offsetHeight-15+'px';
      mainTasks[1].style.height=boards[1].offsetHeight-50+'px';
      delElem.remove();
    }else{
      let delElem=document.getElementsByClassName('ddReady')[readyTasks.length];
      boards[1].style.height=boards[1].offsetHeight-delElem.offsetHeight-15+'px';
      mainTasks[1].style.height=boards[1].offsetHeight-50+'px';
      delElem.remove();
    }
}
function deleteInprocess(){
  let finishedTasks= document.getElementsByClassName('ddInprocess');
  for(let i=0;i<inProcessTasks.length;i++){
    finishedTasks[i].innerHTML=inProcessTasks[i];
  }
  if(inProcessTasks.length===0){
    buttonAddTasks[3].disabled=true;
    buttonAddTasks[3].style.pointerEvents='none';
    buttonAddTasks[3].style.color='#9c9595';
    let delElem=document.getElementsByClassName('ddInprocess')[0];
    boards[2].style.height=boards[2].offsetHeight-delElem.offsetHeight-15+'px';
    mainTasks[2].style.height=boards[2].offsetHeight-50+'px';
    delElem.remove();
  }else{
    let delElem=document.getElementsByClassName('ddBacklog')[inProcessTasks.length];
    boards[2].style.height=boards[2].offsetHeight-delElem.offsetHeight-15+'px';
    mainTasks[2].style.height=boards[2].offsetHeight-50+'px';
    delElem.remove();
  }
}
function changeDropDown(){
  if(!onDropDown){
    arrow.style.transform='rotate(180deg)';
    onDropDown=true;
    openDropDown();
  }else{
    arrow.style.transform='rotate(360deg)';
    onDropDown=false;
    closeDropDown();
  } 
}

function openDropDown(){
  let blockDropDown=document.createElement('div');
  blockDropDown.className='dropDown';
  blockPersonalInfo.append(blockDropDown);
  blockDropDown.append(document.createElement('button'));
  blockDropDown.append(document.createElement('button'));
  blockDropDown.append(document.createElement('button'));
  let arrayLIst=blockDropDown.children;
  arrayLIst[0].innerHTML='My account';
  arrayLIst[1].innerHTML='My tasks';
  arrayLIst[2].innerHTML='Log out';
}

function addBacklog(){
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

function addReady(){
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

function addInprocess(){
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

function addFinished(){
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

function saveBacklog(){
  let input=document.querySelector('.input');
  let str,width;
  str=input.value;
  input.parentNode.removeChild(input);
  if(str!==''){
    let task=document.createElement('dd');
    task.className='ddBacklog';
    listTasks[0].append(task);
    task.innerHTML=str;
    backlogTasks[backlogTasks.length]=str;
    localStorage.setItem('keyBacklog',JSON.stringify(backlogTasks));
    boards[0].style.height=boards[0].offsetHeight+task.offsetHeight-40+'px';
    mainTasks[0].style.height=boards[0].offsetHeight-50+'px';
  }
  else{
    boards[0].style.height=boards[0].offsetHeight-40+'px';
    mainTasks[0].style.height=boards[0].offsetHeight-50+'px';
  }
}
function saveReady(){
  let select=document.querySelector('.input');
  let selectedValue=select.value;
  let selectIndex=select.selectedIndex;
  select.parentNode.removeChild(select);
  if(selectedValue!=='Выберите задачу'){
    let task=document.createElement('dd');
    task.className='ddReady';
    listTasks[1].append(task);
    task.innerHTML=selectedValue;
    readyTasks[readyTasks.length]=selectedValue;
    let partBeforeDelete=backlogTasks.slice(0,selectIndex-1);
    let partAfterDelete=backlogTasks.slice(selectIndex,backlogTasks.length);
    backlogTasks=partBeforeDelete.concat(partAfterDelete);
    localStorage.setItem('keyBacklog',JSON.stringify(backlogTasks));
    localStorage.setItem('keyReady',JSON.stringify(readyTasks));
    boards[1].style.height=boards[1].offsetHeight+task.offsetHeight-40+'px';
    mainTasks[1].style.height=boards[1].offsetHeight-50+'px';
    deleteBacklog();
  }
}
function saveInprocess(){
  let select=document.querySelector('.input');
  let selectedValue=select.value;
  let selectIndex=select.selectedIndex;
  select.parentNode.removeChild(select);
  if(selectedValue!=='Выберите задачу'){
    let task=document.createElement('dd');
    task.className='ddInprocess';
    listTasks[2].append(task);
    task.innerHTML=selectedValue;
    inProcessTasks[inProcessTasks.length]=selectedValue;
    let partBeforeDelete=readyTasks.slice(0,selectIndex-1);
    let partAfterDelete=readyTasks.slice(selectIndex,readyTasks.length);
    readyTasks=partBeforeDelete.concat(partAfterDelete);
    localStorage.setItem('keyReady',JSON.stringify(readyTasks));
    localStorage.setItem('keyInprocess',JSON.stringify(inProcessTasks));
    boards[2].style.height=boards[2].offsetHeight+task.offsetHeight-40+'px';
    mainTasks[2].style.height=boards[2].offsetHeight-50+'px';
    deleteReady();
  }
}
function saveFinished(){
  let select=document.querySelector('.input');
  let selectedValue=select.value;
  let selectIndex=select.selectedIndex;
  select.parentNode.removeChild(select);
  if(selectedValue!=='Выберите задачу'){
    let task=document.createElement('dd');
    task.className='ddFinished';
    listTasks[3].append(task);
    task.innerHTML=selectedValue;
    finishedTasks[finishedTasks.length]=selectedValue;
    let partBeforeDelete=inProcessTasks.slice(0,selectIndex-1);
    let partAfterDelete=inProcessTasks.slice(selectIndex,inProcessTasks.length);
    inProcessTasks=partBeforeDelete.concat(partAfterDelete);
    localStorage.setItem('keyInprocess',JSON.stringify(inProcessTasks));
    localStorage.setItem('keyFinished',JSON.stringify(finishedTasks));
    boards[3].style.height=boards[3].offsetHeight+task.offsetHeight-40+'px';
    mainTasks[3].style.height=boards[3].offsetHeight-50+'px';
    deleteInprocess();
  }
}

function closeDropDown(){
  let delDropDown=document.querySelector('.dropDown');
  delDropDown.parentNode.removeChild(delDropDown);
}

addEventListener('DOMContentLoaded',loadTask);
arrow.addEventListener('click',changeDropDown);
buttonAddTasks[0].addEventListener('click',addBacklog);
buttonAddTasks[1].addEventListener('click',addReady);

buttonAddTasks[2].addEventListener('click',addInprocess);
buttonAddTasks[3].addEventListener('click',addFinished);
     