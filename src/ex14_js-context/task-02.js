class Hangman{
  constructor(word){
    this.word=word;
    this.mistake=0;
    this.wrongLetters=[];
    this.results=[];
    for(let i=0;i<this.word.length;i++){
      this.results[i]='_';
    }
  }
  guess(letter){
    if(this.mistake!==6){
      if(this.word.includes(letter)){
        for(let i=0;i<this.word.length;i++){
          if(letter===this.word[i]){
            this.results[i]=letter;
          }
        }
        let stringWrongLetters=this.wrongLetters.join('');
        if(this.results.includes('_')){
          console.log(stringWrongLetters);
        } 
        else{
          console.log(stringWrongLetters+' | You won!');
        }
      }else{
        this.mistake++;
        this.wrongLetters.push(letter);
        let stringWrongLetters=this.wrongLetters.join();
        console.log('wrong letter, errors left '+(6-this.mistake)+' | '+stringWrongLetters);
      }
    }else{
      console.log('You lose. Start method StartAgain for Restart');
    }
    return this
  }
  getGuessedString(){
    return this.results.join('');
  }
  getErrorsLeft(){
    return 6-this.mistake
  }
  getWrongSymbols(){
    return this.wrongLetters
  }
  getStatus(){
    return this.wrongLetters.join('')+' | errors left '+(6-this.mistake);
  }
  startAgain(newWord){
     this.word=newWord;
     this.mistake=0;
     this.wrongLetters=[];
     this.results=[];
     for(let i=0;i<this.word.length;i++){
       this.results[i]='_';
     }
  }
}
module.exports=new Hangman('webpurple');