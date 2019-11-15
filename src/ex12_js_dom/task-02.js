let arrow=document.querySelector('.arrow');
let blockPersonalInfo=document.querySelector('.personalInfo');
let isOpenMenu=false;

function openDropDown(){
  if(!isOpenMenu){
    arrow.style.transform='rotate(180deg)';
    isOpenMenu=true;
    createDropDown();
  }else{
    arrow.style.transform='rotate(360deg)';
    isOpenMenu=false;
    deleteDropDown();
  } 
}

function createDropDown(){
  let blockDropDown=document.createElement('div');
  blockDropDown.className='dropDown';
  blockPersonalInfo.append(blockDropDown);
  blockDropDown.append(document.createElement('button'));
  blockDropDown.append(document.createElement('button'));
  blockDropDown.append(document.createElement('button'));
  let menuItems=blockDropDown.children;
  menuItems[0].innerHTML='My account';
  menuItems[1].innerHTML='My tasks';
  menuItems[2].innerHTML='Log out';
}

function deleteDropDown(){
  let delDropDown=document.querySelector('.dropDown')
  delDropDown.parentNode.removeChild(delDropDown);
}

arrow.addEventListener('click',openDropDown);