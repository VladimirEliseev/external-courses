function Sweet(name,weigth,calorie){
  this.name=name;
  this.weigth=weigth;
  this.calorie=calorie;
}

function Candy(isChocolate){
  this.isChocolate=isChocolate;
}

function Cookie(typeTastry){
  this.typeTastry=typeTastry;
}

function Present(sweets){
  this.sweets=sweets;
}
Present.prototype.GetAllCalorie=function(){
  let calorie=0;
  this.sweets.forEach(element=>{
    calorie+=element.calorie;
  });
  return calorie;
}
Present.prototype.sortCalorie=function(){
 return this.sweets.sort(function(first,second){
   return first.calorie - second.calorie});
};
Present.prototype.searchSweet=function(name){
  for(let i=0;i<this.sweets.length;i++){
    if(this.sweets[i].name===name){
      return this.sweets[i];
    }
  }
};

const snikers=new Candy(true);
snikers.name='Сникерс';
snikers.weigth=100;
snikers.calorie=278;
const bonpari=new Candy(false);
bonpari.name='Бон пари';
bonpari.weigth=12;
bonpari.calorie=32;
const oreo=new Cookie('Sugar');
oreo.name='Орео';
oreo.weigth=85;
oreo.calorie=135;

const myPresent=new Present([snikers,bonpari,oreo]);

console.log(myPresent.GetAllCalorie());
console.log(myPresent.searchSweet('Сникерс'));
console.log(myPresent.sortCalorie());
