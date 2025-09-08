//@ts-check

const ROCK = "rock";
const PAPER ="paper ";
const SCISSORS = "scissors";
const HAHAHA = "I win and you lose "
let omg = document.getElementById("Yes");

const shoot = function (weapon){
    console.log("player picked", weapon);

    let computer = compWepon();
    console.log ("I have picked",computer)
};

const compWepon = function (){
    const rand = Math.floor(Math.random()*4);
    if (rand == 0){
        return ROCK;
    };
    if (rand == 1){
        return PAPER;
    };
    if (rand == 2) {return SCISSORS;
    };
    return HAHAHA;
};
