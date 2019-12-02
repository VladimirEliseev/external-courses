class Technics{
  constructor(name,power,isTurnOn){
    this.name=name;
    this.power=power;
    this.isTurnOn=isTurnOn;
  }
}
class Appliances extends Technics{
  constructor(name,power,isTurnOn,isBuildIn){
    super(name,power,isTurnOn);
    this.isBuildIn=isBuildIn;
  }
}
class Electronics extends Technics{
  constructor(name,power,isTurnOn,isSmart){
    super(name,power,isTurnOn);
    this.isSmart=isSmart;
  }
}
class Room{
  constructor(){
    this.technics=Array.from(arguments);
  }
  getAllPower(){
    let power=0;
    this.technics.forEach(element=>{
    if(element.isTurnOn){
      power+=element.power;
    }});
    return power;
  }
    searchTechnics(name){
    for(let i=0;i<this.technics.length;i++){
      if(this.technics[i].name===name){
        return this.technics[i];
      }
    }
  }
}

const washer=new Appliances('Samsung',1500,true, false);
const fridge=new Appliances('LG',900,false, true);
const tv=new Electronics('Sharp',700,true, true);
const router=new Electronics('Asus',100,true, false);
const myRoom=new Room(washer,fridge,tv,router);
console.log(myRoom.getAllPower());
console.log(myRoom.searchTechnics('Sharp'));