'use strict'
import {changeDropDown,openDropDown} from '/src/components/header/logo/logo.js';
import {loadTask,deleteBacklog,deleteReady,deleteInprocess,
closeDropDown,saveBacklog, saveFinished,saveInprocess,saveReady,
addBacklog,addReady,addInprocess,addFinished} from '/src/components/main/board/listTask/listTask.js';
let arrow=document.querySelector('.arrow');
let buttonAddTasks=document.getElementsByClassName('addCard');


addEventListener('DOMContentLoaded',loadTask);
arrow.addEventListener('click',changeDropDown);
buttonAddTasks[0].addEventListener('click',addBacklog);
buttonAddTasks[1].addEventListener('click',addReady);

buttonAddTasks[2].addEventListener('click',addInprocess);
buttonAddTasks[3].addEventListener('click',addFinished);
     