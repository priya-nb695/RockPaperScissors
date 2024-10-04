const rock=document.getElementById("rock");
const paper=document.getElementById("paper");
const scissor=document.getElementById("scissor");
const h5Result=document.getElementById("res-display")
const h5Total=document.getElementById("total-res")


let result;
let winCount=0;
let LoseCount=0;
let TieCount=0;
let userChoice;
let computerChoice;
const generateComputerChoice=()=>{
    let cmpch;
     const num=Math.floor(Math.random()*3)
  
    if(num===0){
        cmpch="rock"
    }
    else if(num ===1){
        cmpch="paper"
    }
    else{
        cmpch="scissor"
    }
  
    return cmpch;
}


const handleButtonClick=(btnId)=>{
    userChoice=btnId;
    computerChoice=generateComputerChoice();
    
     console.log("user",userChoice);
     console.log("comp",computerChoice);
     
     if(userChoice ==="rock"){
        if(computerChoice==="rock"){
             result="Tie";
             TieCount++;
        }
        else if(computerChoice==="paper"){
            result="Lose";
            LoseCount++;
           
       }
       else{
        result="Win";
        winCount++;
       }
     }
     if(userChoice ==="paper" ){
        if(computerChoice==="rock"){
            result="Win";
            winCount++;
       }
       else if(computerChoice==="paper"){
           result="Tie";
           TieCount++;
      }
      else{
       result="Lose";
       LoseCount++;
      }
     }
     if(userChoice ==="scissor"){
        if(computerChoice==="rock"){
            result="Lose";
            LoseCount++;
       }
       else if(computerChoice==="paper"){
           result="Win";
           winCount++;
      }
      else{
       result="Tie";
       TieCount++;
      }
     } 
    
    
     h5Result.textContent=`Result:${result}   User Choice:${userChoice}     Computer Choice:${computerChoice}`;
    
    h5Total.textContent=`Wins:${winCount}  Lose:${LoseCount} Tie:${TieCount}`;
    }


rock.addEventListener("click",()=>handleButtonClick('rock'))
paper.addEventListener("click",()=>handleButtonClick('paper'))
scissor.addEventListener("click",()=>handleButtonClick('scissor'))





