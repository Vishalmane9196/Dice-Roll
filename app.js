
const  diceTriggerEl = document.querySelector(".dice__trigger");
const diceImageEl = document.querySelector(" img ");

diceTriggerEl.addEventListener("click",rollDice); 

function rollDice(){

var randomNumber =Math.floor(Math.random()*6)+1;
diceImageEl.src =  "images/dice"+randomNumber+".png";

var makeSound = new Audio ("sound.mp3");
makeSound.play();

}



