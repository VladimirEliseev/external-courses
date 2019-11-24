class Technics{
  constructor(name,power,isOn){
    this.name=name;
    this.power=power;
    this.isOn=isOn;
  }
  searchTechnics(name){
    for(let i=0;i<this.Technics.length;i++){
      if(this.Technics[i].name===name){
        return this.Technics[i];
      }
    }
  }
}
class Appliances extends Technics{
  constructor(name,power,isOn,isBuildIn){
    super(name,power,isOn);
    this.isBuildIn=isBuildIn;
  }
}
class Electronics extends Technics{
  constructor(name,power,isOn,isSmart){
    super(name,power,isOn);
    this.isSmart=isSmart;
  }
}
class Room extends Technics{
  constructor(Technics){
    super();
    this.Technics=Technics;
  }
  getAllPower(){
    let power=0;
    this.Technics.forEach(element=>{
    if(element.isOn===true){
      power+=element.power;
    }});
    return power;
  }
}

const washer=new Appliances('Samsung',1500,true, false);
const fridge=new Appliances('LG',900,false, true);
const tv=new Electronics('Sharp',700,true, true);
const router=new Electronics('Asus',100,true, false);
const myRoom=new Room([washer,fridge,tv,router]);
console.log(myRoom.getAllPower());
console.log(myRoom.searchTechnics('Sharp'));