let highScore = 0;
let totalScore = 0;
let number;
let randomNumber;
let statusGame = document.querySelector('.status')
let chance=5;
// let guessnumber;
function generateRandomNumber(){
    number = Math.random()*100
    randomNumber = Math.trunc(number)
}
document.querySelector('.btn3').addEventListener('click',()=>{
    let range1=document.querySelector('.btn1').value 
    let range2=document.querySelector('.btn2').value
    do{
        generateRandomNumber()
    }while(randomNumber < range1 || randomNumber > range2)
      
        console.log(`random number : ${randomNumber}`)
      
})
document.querySelector('.guess-btn').addEventListener('click',() => 
{
    chance = chance-1;
    
    let guessedNumber=document.querySelector('.btn4').value
     console.log(guessedNumber);
    if(chance<=0 && randomNumber != guessedNumber)
    {
        statusGame.textContent='You Lost, Try Again !'
    
   document.querySelector('.guess-btn').classList.add('hidden')
   document.querySelector('.reset-btn').classList.remove('hidden')
    }else{
        if(randomNumber==guessedNumber)
        {
            statusGame.textContent='congratulations, You Won .'
             
            totalScore = chance * 20+20;
            if(totalScore > highScore){
                highScore = totalScore;
            }
            console.log(totalScore, highScore);
            document.querySelector('.high-score').textContent=highScore;
            document.querySelector('.total-score').textContent=totalScore;

            document.querySelector('.guess-btn').classList.add('hidden')
            document.querySelector('.reset-btn').classList.remove('hidden')}
        else if(randomNumber<guessedNumber){
            statusGame.textContent='My number is lesser than this number.'
        }else if(randomNumber>guessedNumber){
            statusGame.textContent='My number is greater than this number.'

        } 
    }
})

document.querySelector('.reset-btn').addEventListener('click',() => 
{
    chance=5;
    totalScore = 0;
    document.querySelector('.total-score').textContent=totalScore;
    statusGame.textContent='You have Only 5 attempts to guess this number';
    document.querySelector('.btn4').value
    document.querySelector('.guess-btn').classList.remove('hidden')
    document.querySelector('.reset-btn').classList.add('hidden')
    let range1=document.querySelector('.btn1').value 
    let range2=document.querySelector('.btn2').value
    do{
        generateRandomNumber()
    }while(randomNumber < range1 || randomNumber > range2)
      
        console.log(`random number : ${randomNumber}`)
      
})

