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
        if (IWON >= 0 && IWON < 20 || IWON > 70 && IWON < 75){

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

        } else if (IWON > 20 && IWON < 45 || IWON == 20 && IWON < 45 ){    
            ROCK = "바위";
            PAPER = "종이";
            SCISSORS = "가위";
            HAHAHA = "나는 이기고 너는 진다";
                weapon = (weapon);
                compWepon = (compWepon);

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
    } else if (IWON > 45 && IWON < 60 || IWON == 45){

         ROCK = "Камень";
            PAPER = "бумага";
            SCISSORS = "ножницы";
            HAHAHA = "Я выигрываю, а ты проигрываешь.";
                weapon = (weapon);
                compWepon = (compWepon);

        text = `Вы выбрали ${weapon}.`
        text = text + `Я выбрал(а) ${computer}. `;
            iwin = difTwo(weapon,computer)
         if(iwin?.isTie == true){
          winner = "Я победил!!!!";
        IWON += 1;
     }else if (iwin?.playWin){
        winner = "Я всё ещё выигрываю!!!!!";
        IWON += 1;
     }   else if (iwin?.iWIn){
         winner = "Я всегда буду выигрывать!!!!";
         IWON += 1;
      };
        text += `${winner} По той причине, что я так сказал, ты не можешь со мной спорить, но также. ${iwin?.des}. Также я победил. ${IWON} Потому что я лучше тебя во всех отношениях!!!!`

        console.log (iwin);
       aftermathElement.textContent = text
    } else if (IWON > 100 || IWON == 100 ){
         ROCK = "حجر";
            PAPER = "ورق";
            SCISSORS = "مقص";
            HAHAHA = "أنا أفوز، وأنت تخسر.";
                weapon = (weapon);
                compWepon = (compWepon);

        text = `لقد اخترت ${weapon}.`
        text = text + `لقد اخترت ${computer}. `;
            iwin = ar(weapon,computer)
         if(iwin?.isTie == true){
          winner = "لقد انتصرت";
        IWON += 1;
     }else if (iwin?.playWin){
        winner = ".....ما زلت أفوز";
        IWON += 1;
     }   else if (iwin?.iWIn){
         winner = "سأظل دائمًا أفوز!!!!";
         IWON += 1;
      };
        text += `${winner} لهذا السبب، لأنني قلت ذلك، لا يمكنك الجدال معي، ولكن أيضًا. ${iwin?.des}. كما أنني انتصرت. ${IWON} ني أفضل منك في جميع النواحين
      `
        console.log (iwin);
       aftermathElement.textContent = text
    } else if (IWON > 60 && IWON < 100 || IWON == 60){

         ROCK = "Pierre";
            PAPER = "papier";
            SCISSORS = "ciseaux";
            HAHAHA = "Je gagne, et tu perds.";
                weapon = (weapon);
                compWepon = (compWepon);

        text = `Vous avez sélectionné${weapon}.`
        text = text + `J'ai choisi ${computer}. `;
            iwin = fr(weapon,computer)
         if(iwin?.isTie == true){
          winner = "J'ai gagné !!!!";
        IWON += 1;
     }else if (iwin?.playWin){
        winner = "Je gagne toujours !!!!";
        IWON += 1;
     }   else if (iwin?.iWIn){
         winner = "Je vais toujours gagner !!!!";
         IWON += 1;
      };
        text += `${winner} Pour cette raison, je ne peux pas discuter avec moi, mais aussi.${iwin?.des}. J'ai aussi gagné. ${IWON} Parce que je suis meilleur que toi dans tous les sens !!!!`

        console.log (iwin);
       aftermathElement.textContent = text
    };

    console.log("I have won", IWON, "times because I am better than you in every way");
};


let compWepon = function (){
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

function difTwo(p,c){
     let result = {
        isTie: false,
        playWin: false,
        iWIn: false,
        des: "",
    };

    if (p == c){
        result.isTie = true;
        result.des = "Это ничья?";
        return result;
    };
    if (p == "Камень" && c == "ножницы"){
        result.playWin = true;
        result.des = "Это третий раунд, и нужно выиграть два раза, но я ничего не выиграл.";
        return result;
    };
        if (p == "бумага" && c == "ножницы"){
        result.iWIn = true;
        result.des = "Смотри на меняaaa";
        return result;
    };
       if (p == "바Камень위" && c == "бумага"){
        result.iWIn = true;
        result.des = "Я же говорил тебе, что я лучше!!!!";
        return result;
    };
        if (p == "ножницы" && c == "бумага"){
        result.playWin = true;
        result.des = "Ты, кажется, выиграл...? ";
        return result;
    };
       if (p == "ножницы" && c == "Камень"){
        result.iWin = true;
        result.des = "Надеюсь, в следующий раз мне повезет больше..... Или иначе мне будет еще хуже!!!";
        return result;
    };
    if (p == "ножницы" && c == "Я выигрываю, а ты проигрываешь."){
        result.iWIn = true;
        result.des = "Хахахах, ты ужасен.";
        return result;
    };
    if (p == "бумага" && c == "Камень"){
        result.iWIn = true;
        result.des = "Я сказал тебе, что я побью тебя!!!";
        return result;
    };
    if (p == "Камень" && c == "Я выигрываю, а ты проигрываешь."){
        result.iWIn = true;
        result.des = "Хахахах, ты ужасен.";
        return result;
    };
     if (p == "бумага" && c == "Я выигрываю, а ты проигрываешь."){
        result.iWIn = true;
        result.des = "Хахахах, ты ужасен.";
        return result;
    };
    result.des = "XAXAXA,ты ужасен.";
    return result;
};

function ar(p,c){
         let result = {
        isTie: false,
        playWin: false,
        iWIn: false,
        des: "",
    };

    if (p == c){
        result.isTie = true;
        result.des = "هل هذا تعادل؟";
        return result;
    };

    if (p == "حجر" && c == "مقص"){
        result.playWin = true;
        result.des = "هذه الجولة الثالثة، ويجب الفوز مرتين، لكنني لم أفز بشيء.";
        return result;
    };
        if (p == "ورق" && c == "مقص"){
        result.iWIn = true;
        result.des = "انظر إليّ aaa";
        return result;
    };
       if (p == "حجر" && c == "ورق"){
        result.iWIn = true;
        result.des = "لقد قلت لك إنني أفضل!!!!";
        return result;
    };
        if (p == "مقص" && c == "ورق"){
        result.playWin = true;
        result.des = "يبدو أنك فزت...؟ ";
        return result;
    };
       if (p == "مقص" && c == "حجر"){
        result.iWin = true;
        result.des = "آمل أن يحالفني الحظ أكثر في المرة القادمة..... أو خلاف ذلك سيكون وضعي أسوأ بكثير!!!";
        return result;
    };
    if (p == "مقص" && c == "أنا أفوز، وأنت تخسر."){
        result.iWIn = true;
        result.des = "هههههههه، أنت فظيع.";
        return result;
    };
    if (p == "ورق" && c == "حجر"){
        result.iWIn = true;
        result.des = "Я сказал тебе, что я побью тебя!!!";
        return result;
    };
    if (p == "حجر" && c == "أنا أفوز، وأنت تخسر"){
        result.iWIn = true;
        result.des = "هههههههه، أنت فظيع.";
        return result;
    };
     if (p == "ورق" && c == "أنا أفوز، وأنت تخسر"){
        result.iWIn = true;
        result.des = "هههههههه، أنت فظيع.";
        return result;
    };
    result.des = "هههههههه، أنت فظيع.";
    return result;  
};

function fr(p,c){
     let result = {
        isTie: false,
        playWin: false,
        iWIn: false,
        des: "",
    };

    if (p == c){
        result.isTie = true;
        result.des = "C'est un match nul?";
        return result;
    };
    if (p == ROCK && c == SCISSORS){
        result.playWin = true;
        result.des = "C'est un meilleur des trois, tu n'as rien gagné.";
        return result;
    };
        if (p == PAPER && c == SCISSORS){
        result.iWIn = true;
        result.des = "Regarde-moiiiii";
        return result;
    };
       if (p == ROCK && c == PAPER){
        result.iWIn = true;
        result.des = "Je t'ai dit que j'étais meilleur !!!!";
        return result;
    };
        if (p == SCISSORS && c == PAPER){
        result.playWin = true;
        result.des = "Je suppose que tu gagnes... ?";
        return result;
    };
       if (p == SCISSORS && c == ROCK){
        result.iWin = true;
        result.des = "Mieux vaut essayer la prochaine fois..... ou pas mieux pour moi!!!";
        return result;
    };
    if (p == SCISSORS && c == HAHAHA){
        result.iWIn = true;
        result.des = "Hahaha tu es nul";
        return result;
    };
    if (p == PAPER && c == ROCK){
        result.iWIn = true;
        result.des = "Je t'ai dit que je gagnerais!!!";
        return result;
    };
    if (p == ROCK && c == HAHAHA){
        result.iWIn = true;
        result.des = "Hahaha tu es nul";
        return result;
    };
     if (p == PAPER && c == HAHAHA){
        result.iWIn = true;
        result.des = "Hahaha tu es nul";
        return result;
    };

    result.des = "Hahaha tu es nul";
    return result;
};

/**@type {HTMLElement} */
//@ts-ignore checking for null bellow 
let aftermathElement = document.getElementById("aftermath");
if (aftermathElement == null){
     throw "aftermath is no good";
};
