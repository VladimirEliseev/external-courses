function getSimpleNumber(number){
	let SimpleOrComposite; 
	if(((number%2==0) ||(number%3==0) || (number%5==0)) && (number!==0) && (typeof(number)=='number') &&(number!=2) && (number<1000))
        SimpleOrComposite="Число " + number + "- составное число";
    else if((number%number==0) && (number%1==0) &&(number!==0) && (number!==1) && (typeof(number)=='number') &&  (number<1000))
    	SimpleOrComposite="Число " + number + " - простое число";
    else  SimpleOrComposite="Данные не верны";
    return SimpleOrComposite;
}
getSimpleNumber(10);
module.exports =getSimpleNumber;
