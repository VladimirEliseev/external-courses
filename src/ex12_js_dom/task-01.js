const arrayNumber=["asset/image1.jpg",
  "asset/image2.jpg",
  "asset/image3.jpg"];

let image1=document.querySelector(".image");
let conteiner=document.querySelector(".conteiner-image");
let imageNext=document.querySelector(".imageNext");
let imageBack=document.querySelector(".imageBack");
let buttonNext=document.querySelector('.buttonNext');
let buttonBack=document.querySelector('.buttonBack');
let image2=document.createElement('img');
image2.className='image';
conteiner.append(image2);
image2.style.transform="scale(0)";

let key=0,currentNumber=0,img;
function animation(){
  if(key===0){
    img=image2;
    image1.style.zIndex='1';
    image2.style.zIndex='0';
    image1.style.transform="scale(0)";
    image2.style.transform="scale(1)";
    image2.style.display='block';
    key++;
  }else{
    img=image1;
    image1.style.zIndex='0';
    image2.style.zIndex='1';
    image2.style.transform="scale(0)";
    image1.style.transform="scale(1)";
    key=0;
  }
}

function next(){
  animation();
  currentNumber++;
  if(currentNumber===arrayNumber.length-1){
    img.src=arrayNumber[currentNumber];
    imageNext.src=arrayNumber[0];
    imageBack.src=arrayNumber[currentNumber-1];
  }
  else if(currentNumber>arrayNumber.length-1){
    currentNumber=0;
    img.src=arrayNumber[currentNumber];
    imageNext.src=arrayNumber[currentNumber+1];
    imageBack.src=arrayNumber[arrayNumber.length-1];
    
  }else{
    img.src=arrayNumber[currentNumber];
    imageNext.src=arrayNumber[currentNumber+1];
    imageBack.src=arrayNumber[currentNumber-1];
  }
}

function back(){
  animation();
  currentNumber--;
  if(currentNumber<0){
    currentNumber=arrayNumber.length-1;
    img.src=arrayNumber[currentNumber]
    imageNext.src=arrayNumber[0];
    imageBack.src=arrayNumber[currentNumber-1];
  }
  if(currentNumber===0){
    img.src=arrayNumber[currentNumber];
    imageNext.src=arrayNumber[1];
    imageBack.src=arrayNumber[arrayNumber.length-1];
  }
  else{
    img.src=arrayNumber[currentNumber];
    imageNext.src=arrayNumber[currentNumber+1];
    imageBack.src=arrayNumber[currentNumber-1];
  }
}

buttonNext.addEventListener('click',next);
buttonBack.addEventListener('click',back);