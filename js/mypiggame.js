let randomNumber;
let currentNumber=0;
let totalScore=0;
function rollDice(){
  let  number=Math.random()*6;
  randomNumber=Math.floor(number)+1;
  range1=document.querySelector('.dicenumber').textContent=randomNumber;
}
document.querySelector('.roll-dice').addEventListener('click',()=>{
  let range1=document.querySelector('.dicenumber').value;
  let range2=document.querySelector('.current-score').value; 
 
       rollDice()
   
    console.log(`random number : ${randomNumber}`)   
       if(randomNumber == 1){
        totalScore += currentNumber; 
        currentNumber=0;       
        document.querySelector('.current-score').textContent = currentNumber
       }else{
        currentNumber +=randomNumber;
        document.querySelector('.current-score').textContent = currentNumber
       }
})

document.querySelector('.hold').addEventListener('click',() => { 
  totalScore += currentNumber;
  currentNumber=0;
  document.querySelector('.totalscore').textContent = totalScore
  console.log(totalScore);
})