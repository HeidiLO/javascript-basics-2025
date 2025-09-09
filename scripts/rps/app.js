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

function answer(p,c){
    let result = {
        isTie: false,
        playWin: false,
        iWIn: false,
        des: "",
    };

    if (p == c){
        result.isTie = true;
        result.des = "It's a tie?";
        return result;
    };
    if (p == ROCK && c == SCISSORS){
        result.playWin = true;
        result.des = "It's a best out of three you have not won anything";
        return result;
    };
        if (p == PAPER && c == SCISSORS){
        result.iWIn = true;
        result.des = "Look at meeeeee";
        return result;
    };
       if (p == ROCK && c == PAPER){
        result.iWIn = true;
        result.des = "I told you I was better!!!!";
        return result;
    };
        if (p == SCISSORS && c == PAPER){
        result.playWin = true;
        result.des = "You win I guess...?";
        return result;
    };
       if (p == SCISSORS && c == ROCK){
        result.iWin = true;
        result.des = "Better luck next time..... or not better for me!!!";
        return result;
    };
    if (p == SCISSORS && c == HAHAHA){
        result.iWIn = true;
        result.des = "Hahaha you suck";
        return result;
    };
    if (p == ROCK && c == HAHAHA){
        result.iWIn = true;
        result.des = "Hahaha you suck";
        return result;
    };
     if (p == PAPER && c == HAHAHA){
        result.iWIn = true;
        result.des = "Hahaha you suck";
        return result;
    };
};