const arrayPictures=["asset/image1.jpg",
  "asset/image2.jpg",
  "asset/image3.jpg"];
let imageCurrent=document.querySelector(".image");
let conteiner=document.querySelector(".conteiner-image");
let imageNext=document.querySelector(".imageNext");
let imageBack=document.querySelector(".imageBack");
const buttonNext=document.querySelector('.buttonNext');
const buttonBack=document.querySelector('.buttonBack');
let imageCurrentSub=document.createElement('img');
imageCurrentSub.className='image';
conteiner.append(imageCurrentSub);
imageCurrentSub.style.transform="scale(0)";

let index=0,currentNumber=0,img;
function animation(){
  if(index===0){
    img=imageCurrentSub;
    imageCurrent.style.zIndex='1';
    imageCurrentSub.style.zIndex='0';
    imageCurrent.style.transform="scale(0)";
    imageCurrentSub.style.transform="scale(1)";
    index++;
  }else{
    img=imageCurrent;
    imageCurrent.style.zIndex='0';
    imageCurrentSub.style.zIndex='1';
    imageCurrentSub.style.transform="scale(0)";
    imageCurrent.style.transform="scale(1)";
    index=0;
  }
}

function goNext(){
  animation();
  currentNumber++;
  if(currentNumber===arrayPictures.length-1){
    img.src=arrayPictures[currentNumber];
    imageNext.src=arrayPictures[0];
    imageBack.src=arrayPictures[currentNumber-1];
  }
  else if(currentNumber>arrayPictures.length-1){
    currentNumber=0;
    img.src=arrayPictures[currentNumber];
    imageNext.src=arrayPictures[currentNumber+1];
    imageBack.src=arrayPictures[arrayPictures.length-1];
    
  }else{
    img.src=arrayPictures[currentNumber];
    imageNext.src=arrayPictures[currentNumber+1];
    imageBack.src=arrayPictures[currentNumber-1];
  }
}

function goBack(){
  animation();
  currentNumber--;
  if(currentNumber<0){
    currentNumber=arrayPictures.length-1;
    img.src=arrayPictures[currentNumber];
    imageNext.src=arrayPictures[0];
    imageBack.src=arrayPictures[currentNumber-1];
  }
  if(currentNumber===0){
    img.src=arrayPictures[currentNumber];
    imageNext.src=arrayPictures[1];
    imageBack.src=arrayPictures[arrayPictures.length-1];
  }
  else{
    img.src=arrayPictures[currentNumber];
    imageNext.src=arrayPictures[currentNumber+1];
    imageBack.src=arrayPictures[currentNumber-1];
  }
}

buttonNext.addEventListener('click',goNext);
buttonBack.addEventListener('click',goBack);