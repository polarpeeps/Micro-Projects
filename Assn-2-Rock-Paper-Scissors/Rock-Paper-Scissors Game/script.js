const options = ["Rock", "Paper", "Scissors"];

const generateRandomResponse = () => (Math.random() * 10).toFixed(0) % 3;
const rock=document.querySelector("#rock")
const paper=document.querySelector("#paper")
const scissor=document.querySelector("#scissor")
const header = document.querySelector("header h1")
const scoreBoard = document.querySelector(".score")

var userScore=0
var computerScore=0
var scores=document.createElement("p")
scores.innerHTML=`${userScore} : ${computerScore}`
scoreBoard.appendChild(scores)

rock.addEventListener('click',(e)=>{
    const computerResponse =options[generateRandomResponse()]
    switch (computerResponse) {
        case "Rock":
            header.innerHTML="It's a draw"
            console.log("Its a draw")
            break;
        case "Scissors":
            header.innerHTML="Rock beats Scissors"
            console.log("Rock beats Scissors")
            userScore++
            scores.innerHTML=`${userScore} : ${computerScore}`
            break;
        case "Paper":
            header.innerHTML="Paper beats Rock "
            console.log("Paper beats Rock ")
            computerScore++
            scores.innerHTML=`${userScore} : ${computerScore}`
            break;
        default:
            scores.innerHTML=`${userScore} : ${computerScore}`
            break;
    }
})
paper.addEventListener('click',(e)=>{
    const computerResponse =options[generateRandomResponse()]
    switch (computerResponse) {
        case "Paper":
            header.innerHTML="It's a draw"
            console.log("It's a draw")
            break;
        case "Scissors":
            header.innerHTML="Scissors beats Paper"
            console.log("Scissors beats Paper")
            computerScore++
            scores.innerHTML=`${userScore} : ${computerScore}`
            break;
        case "Rock":
            header.innerHTML="Paper beats Rock "
            console.log("Paper beats Rock ")
            userScore++
            scores.innerHTML=`${userScore} : ${computerScore}`
            break;
        default:
            break;
    }
})
scissor.addEventListener('click',(e)=>{
    const computerResponse =options[generateRandomResponse()]
    switch (computerResponse) {
        case "Scissors":
            header.innerHTML="It's a draw"
            console.log("It's a draw")
            break;
        case "Rock":
            header.innerHTML="Rock beats Scissors"
            console.log("Rock beats Scissors")
            computerScore++
            scores.innerHTML=`${userScore} : ${computerScore}`
            break;
        case "Paper":
            header.innerHTML="Scissors beats Paper "
            console.log("Scissors beats Paper ")
            userScore++
            scores.innerHTML=`${userScore} : ${computerScore}`
            break;
        default:
            break;
    }
})