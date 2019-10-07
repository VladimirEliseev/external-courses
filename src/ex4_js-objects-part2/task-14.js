function returnRandomNumber(min,max){
 let random=min+Math.random()*(max+1-min);
 return Math.floor(random)
}

returnRandomNumber(1,5);
module.exports=returnRandomNumber;
