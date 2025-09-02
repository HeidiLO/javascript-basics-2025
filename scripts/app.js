// This will be our last javascript file
console.log ("yes I did my work today....");
console.log ("don't you believe me?");
let username = "I totaly did what I am supposed to do, why are you looking at me like that";
console.log ("please belive me");
username= "no i'm not lying ";
let beliveMe = [
    "Omg I totally did my work",
    "Will you belive me please",
    "why is this making you sus...",
    "You can see my work, why are you doubting me",
    "Yes look HELLO FROM JAVASCRIPT, that has toatlly been here the whole time",
    "I have the documentation to prove it, just look at my code ignore when I commited it",
    "Omg what are you talking about? I have done what is needed of me",
    "My dog ate my work",
    "I am literly in the middle of finishing it"
]
let getRandomIndex = function (a) {
    let rand = Math.random() * a.length;
    return Math.floor(rand);
};
let getRandomWord = function (a) {
    return a[getRandomIndex(a)];
};
let generateExcuse = function (a) {
    let excuse =
        getRandomWord(a) +
        " "
    return excuse;
};
let IDidMyWork = true;
let IAmLying = false;
console.log ("See even the code know that I am not lying see... Am I lying?", IAmLying, "And also that I did my work is ", IDidMyWork);
console.log (username);
console.log (generateExcuse(beliveMe));
let mine = document.getElementById("My name");
let output = document.getElementById("name");
let MINE = document.getElementById("yes");
let myname = [
    "this is my name",
    "Whatever I want",
    "This is super code",
    "Blood on that bus",
    "nooo - piper ",
    "oh look there is a blimp"
];
const Ahhhh = "I am doing what I am supposed to"
console.log(Ahhhh)
let youClickedMe = [
    "look what you did",
    "This is your fault",
    "What happens next is becuase of you ",
    "You have to deal with the consequences",
    "Thanks for clicking me ",
    "Keep clicking me ",
    "You clicked me!",
    "You found out the truth now we have to take care of you",
    "Shh this won't be that bad",
    "You will be okay this is totally normal and fine",
    "Click me again I dare you ",
    "This will be fun at least for me",
    "Now you have to find out what you did wrong and solve "
]

let generateHA = function () {
    let ha =
        getRandomWord(youClickedMe) +
        " "
    return ha;
};

MINE.addEventListener("click", function () {
    let ha = generateHA();
    output.textContent = ha;
});

let generateName = function (a, ){
    let mynames =
        getRandomWord(a) +
    ""
    return mynames;
};
mine.addEventListener("click", function () {
    let name = generateName(myname, "is");
    output.textContent = name;
});
let profile = {
    truth: username,
    Lie: "This whole thing has been a lie",
    Truth : "I have never lied befrore"
};
console.log (profile);

let k = document.getElementById("k-pop");
let ks = [
 "Hey, hey, Hey hey, HeyDon't want you, need yo Yeah, I need you to fill me up 마시고 마셔 봐도 성에 차지 않아 Got a feeling that, oh, yeah
You could be everything that
That I need , taste so sweet 
Every sip makes me want more, yeah"

Don't want you, need you
Yeah, I need you to fill me up
마시고 마셔 봐도
성에 차지 않아
Got a feeling that, oh, yeah
You could be everything that
That I need , taste so sweet 
Every sip makes me want more, yeah

Lookin' like snacks 'cause you got it like that
Take a big bite, want another bite, yeah
너의 모든 걸 난 원해, 원해, 원해
너 말곤 모두 뻔해, 뻔해, 뻔해
When you're in my arms, I hold you so tight (So tight)
Can't let go, no, no, not tonight

지금 당장 날 봐 시간 없잖아
넌 내꺼야 이미 알고 있잖아
'Cause I need you to need me
I'm empty, you feed me so refreshing
My little soda pop"
];