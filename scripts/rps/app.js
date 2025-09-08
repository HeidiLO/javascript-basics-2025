//@ts-check

const ROCK = "rock";
const PAPER ="paper ";
const SCISSORS = "scissors";

let omg = document.getElementById("Yes")

const shoot = function (weapon){
    console.log("player picked", weapon);
};

const compWepon = function (){
    const rand = Math.floor(Math.random()*3);
    if (rand == 0){
        return ROCK;
    }
    if (rand == 1){
        return PAPER;
    }
    return SCISSORS;
};
