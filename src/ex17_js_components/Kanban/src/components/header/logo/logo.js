export function changeDropDown(){
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
export function openDropDown(){
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