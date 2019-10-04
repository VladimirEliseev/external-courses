function createObject(){
	const person={};
	person.name='Andrew';
	person.age=20;
	person.married=false;

  delete person.married;
}

module.exports=createObject;
