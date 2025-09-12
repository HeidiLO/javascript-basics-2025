//@ts-check

const ROCK = "rock";
const PAPER ="paper ";
const SCISSORS = "scissors";
const HAHAHA = "I win and you lose "
let omg = document.getElementById("Yes");
const tieCount = "0";
let IWON = 0;
const pl = "0";
const shoot = function (weapon){
    let text = `You have picked ${weapon}. `;
    console.log("You have picked", weapon);

      let computer = compWepon();
    console.log ("I have picked",computer);
    text = text + `I have picked ${computer}. `;
    let iwin = answer(weapon,computer);
    console.log ("The answer to the battle is", iwin);
    let winner = "";
    if(iwin?.isTie == true){
        winner = "I win!!!";
        IWON += 1;
    }else if (iwin?.playWin){
        winner = "I still win!!!";
        IWON += 1;
    }   else if (iwin?.iWIn){
         winner = "I will always win!!!!!!";
         IWON += 1;
    };

     text += `${winner} because I said so and you can't argue with me but also ${iwin?.des}. Also I have won ${IWON} times becuase I am better than you in every way possible!!!!!`;

    aftermathElement.textContent = text

    console.log("I have won", IWON, "times because I am better than you in every way");
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
    if (p == PAPER && c == ROCK){
        result.iWIn = true;
        result.des = "I told you I would win!!!";
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

/**@type {HTMLElement} */
//@ts-ignore checking for null bellow 
let aftermathElement = document.getElementById("aftermath");
if (aftermathElement == null){
     throw "aftermath is no good";
};
