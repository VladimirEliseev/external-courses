let arrow=document.querySelector('.arrow');
let blockPersonalInfo=document.querySelector('.personalInfo');
let onDropDown=false;

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

function closeDropDown(){
    let delDropDown=document.querySelector('.dropDown')
    delDropDown.parentNode.removeChild(delDropDown);
}

arrow.addEventListener('click',changeDropDown);