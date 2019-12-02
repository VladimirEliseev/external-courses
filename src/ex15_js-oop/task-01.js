function Sweet(name,weigth,calories){
  this.name=name;
  this.weigth=weigth;
  this.calories=calories;
}

function Candy(isChocolate){
  this.isChocolate=isChocolate;
}
Candy.prototype=new Sweet();

function Cookie(typeTastry){
  this.typeTastry=typeTastry;
}
Cookie.prototype=new Sweet();

function Present(sweets){
  this.sweets=sweets;
}
Present.prototype.getAllCalories=function(){
  let calories=0;
  this.sweets.forEach(element=>{
    calories+=element.calories;
  });
  return calories;
}
Present.prototype.sortCalories=function(){
 return this.sweets.sort(function(a,b){
   return a.calories - b.calories});
};
Present.prototype.searchSweet=function(name){
  for(let i=0;i<this.sweets.length;i++){
    if(this.sweets[i].name===name){
      return this.sweets[i];
    }
  }
  return 'Не найдено';
};

const snikers=new Candy(true);
snikers.name='Сникерс';
snikers.weigth=100;
snikers.calories=278;
const bonpari=new Candy(false);
bonpari.name='Бон пари';
bonpari.weigth=12;
bonpari.calories=32;
const oreo=new Cookie('Sugar');
oreo.name='Орео';
oreo.weigth=85;
oreo.calories=135;

const myPresent=new Present([snikers,bonpari,oreo]);

console.log(myPresent.getAllCalories());
console.log(myPresent.searchSweet('Сникерс'));
console.log(myPresent.sortCalories());
