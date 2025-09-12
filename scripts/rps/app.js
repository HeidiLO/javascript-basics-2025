//@ts-check

let ROCK = "rock";
let  PAPER ="paper ";
let SCISSORS = "scissors";
let HAHAHA = "I win and you lose "
let omg = document.getElementById("Yes");
const tieCount = "0";
let IWON = 0;
const pl = "0";
const shoot = function (weapon){
    let text = `You have picked ${weapon}. `;
    console.log("You have picked", weapon);

      let computer = compWepon();
          let iwin = answer(weapon,computer);
    console.log ("I have picked",computer);
    text = text + `I have picked ${computer}. `;
    console.log ("The answer to the battle is", iwin);
    let winner = "";
        if (IWON >= 0 && IWON < 20){

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

        } else if (IWON >= 20 ){
            ROCK = "바위";
            PAPER = "종이";
            SCISSORS = "가위";
            HAHAHA = "나는 이기고 너는 진다";
        text = `당신은 선택했습니다 ${weapon}.`
        text = text + `나는 선택했습니다 ${computer}. `;
            iwin = dif(weapon,computer)
         if(iwin?.isTie == true){
          winner = "나는 이겼다!!!!";
        IWON += 1;
    }else if (iwin?.playWin){
        winner = "나는 아직도 이겨!!!!!";
        IWON += 1;
    }   else if (iwin?.iWIn){
         winner = "나는 항상 이길 것이다!!!!";
         IWON += 1;
    };
        text += `${winner} 내가 그렇게 말했다는 이유로, 너는 나와 논쟁할 수 없지만 또한 ${iwin?.des}. 또한 나는 이겼다 ${IWON} 나는 가능한 모든 면에서 당신보다 낫기 때문입니다!!!!`

        console.log (iwin);
       aftermathElement.textContent = text
    };


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

function dif(p,c){
     let result = {
        isTie: false,
        playWin: false,
        iWIn: false,
        des: "",
    };

    if (p == c){
        result.isTie = true;
        result.des = "무승부인가요?";
        return result;
    };
    if (p == "바위" && c == "가위"){
        result.playWin = true;
        result.des = "3판 2선승제인데, 아무것도 이기지 못했어";
        return result;
    };
        if (p == "종이" && c == "가위"){
        result.iWIn = true;
        result.des = "나를 봐aaa";
        return result;
    };
       if (p == "바위" && c == "종이"){
        result.iWIn = true;
        result.des = "나는 네게 내가 더 낫다고 말했잖아!!!!";
        return result;
    };
        if (p == "가위" && c == "종이"){
        result.playWin = true;
        result.des = "너가 이긴 것 같아...?";
        return result;
    };
       if (p == "가위" && c == "바위"){
        result.iWin = true;
        result.des = "다음번에 더 나은 운이 있기를..... 아니면 내게는 더 나쁘겠지!!!";
        return result;
    };
    if (p == "가위" && c == "나는 이기고 너는 진다"){
        result.iWIn = true;
        result.des = "하하하 너는 형편없어";
        return result;
    };
    if (p == "종이" && c == "바위"){
        result.iWIn = true;
        result.des = "나는 네게 내가 이길 것이라고 말했어!!!";
        return result;
    };
    if (p == "바위" && c == "나는 이기고 너는 진다"){
        result.iWIn = true;
        result.des = "하하하 너는 형편없어";
        return result;
    };
     if (p == "종이" && c == "나는 이기고 너는 진다"){
        result.iWIn = true;
        result.des = "하하하 너는 형편없어";
        return result;
    };
};

/**@type {HTMLElement} */
//@ts-ignore checking for null bellow 
let aftermathElement = document.getElementById("aftermath");
if (aftermathElement == null){
     throw "aftermath is no good";
};
