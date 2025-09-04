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
 "Hey, hey, Hey hey, Hey Don't want you, need yo Yeah, I need you to fill me up 마시고 마셔 봐도 성에 차지 않아 Got a feeling that, oh, yeah You could be everything that That I need , taste so sweet Every sip makes me want more, yeah Don't want you, need you Yeah, I need you to fill me up 마시고 마셔 봐도 성에 차지 않아 Got a feeling that, oh, yeah You could be everything that That I need , taste so sweet  Every sip makes me want more, yeah Lookin' like snacks 'cause you got it like that Take a big bite, want another bite, yeah 너의 모든 걸 난 원해, 원해, 원해 너 말곤 모두 뻔해, 뻔해, 뻔해 When you're in my arms, I hold you so tight (So tight) Can't let go, no, no, not tonight 지금 당장 날 봐 시간 없잖아 넌 내꺼야 이미 알고 있잖아 'Cause I need you to need me I'm empty, you feed me so refreshing My little soda pop You're all I can think of Every drop I drink up You're my soda pop My little soda pop Cool me down, you're so hot Pour me up, I won't stop You're my soda pop My little soda pop My little soda pop. Uh, make me wanna flip the top 한 모금에 you hit the spot Every little drip and drop, fizz and pop, ah 소름 돋아 it's gettin' hot Yes, I'm sippin' when it's drippin' now It's done? I need a second round And pour a lot and don't you stop 'Til my soda pop fizzles out 꿈 속에 그려왔던 너 난 절대 놓칠 수 없어 널 원해 꼭 I waited so long for a taste of soda So, the wait is over, baby Come and fill me up Just can't get enough Oh You're all I can think of Every drop I drink up You're my soda pop My little soda pop (Yeah, yeah) Cool me down, you're so hot Pour me up, I won't stop (Oh, oh) You're my soda pop My little soda pop Ooh, ooh Ooh, ooh You're my soda pop Gotta drink every drop",
 "I was a ghost, I was alone, hah 어두워진 앞길속에 (Ah) Given the throne, I didn't know how to believe I was the queen that I'm meant to be I lived two lives, tried to play both sides But I couldn't find my own place Called a problem child 'cause I got too wild But now that's how I'm getting paid, 끝없이 on stage I'm done hiding, now I'm shining like I'm born to be We're dreaming hard, we came so far, now I believe We're goin' up, up, up, it's our moment You know together we're glowin' Gonna be, gonna be golden Oh, up, up, up with our voices 영원히 깨질 수 없는 Gonna be, gonna be golden Oh, I'm done hidin' now I'm shinin' like I'm born to be Oh, our time, no fears, no lies That's who we're born to be Waited so long to break these walls down To wake up and feel like me Put these patterns all in the past now And finally live like the girl they all see No more hiding, I'll be shining like I'm born to be 'Cause we are hunters, voices strong, and I know I believe We're goin' up, up, up, it's our moment You know together we're glowing Gonna be, gonna be golden Oh, up, up, up, with our voices 영원히 깨질 수 없는 Gonna be, gonna be golden Oh, I'm done hidin', now I'm shining like I'm born to be Oh, our time, no fears, no lies That's who we're born to be You know we're gonna be, gonna be golden We're gonna be, gonna be Born to be, born to be glowin' 밝게 빛나는 우리 You know that it's our time, no fears, no lies That's who we're born to be",
 "Takedown, takedown Takedown, down, down, down Takedown, takedown Takedown, down, down, down (It's a takedown) So sweet, so easy on the eyes, but hideous on the inside Whole life spreading lies, but you can't hide, baby, nice try I'm 'bout to switch up these vibes, I finally opened my eyes It's time to kick you straight back into the night 'Cause I see your real face and it's ugly as sin Time to put you in your place 'cause you're rotten within When your patterns start to show It makes the hatred wanna grow outta my veins I don't think you're ready for the takedown Break you into pieces in a world of pain, 'cause you're all the same Yeah, it's a takedown A demon with no feelings, don't deserve to live, it's so obvious I'ma gear up and take you down Woah-oh, da-da-da, down It's a takedown Woah-oh, da-da-da, down I'ma take it down Woah-oh, da-da-da, down It's a takedown Woah-oh, da-da-da, down (Take it down) It's a takedown, I'ma take you out, you break down like, What? It's a takedown, I'ma take you out and I ain't gonna stop 정신을 놓고 널 짓밟고 칼을 새겨놔 You'll be beggin' and cryin', all of you dyin', never miss my shot When your patterns start to show It makes the hatred wanna grow out of my veins I don't think you're ready for the takedown 당당하게 어둠 앞에 다가서 다 무너뜨려 Yeah, it's a takedown A demon with no feelings, don't deserve to live, it's so obvious I'ma gear up and take you downn Woah-oh, da-da-da, down It's a takedown Woah-oh, da-da-da, down I'ma take it down (Watch me do it, yeah) Woah-oh, da-da-da, down It's a takedown (Ooh) Woah-oh, da-da-da, down (Ooh) Oh, you're the master of illusion 나를 속이려 하지  Look at all the masses that you're foolin' But they'll turn on you soon, so how? How can you sleep or live with yourself? A broken soul trapped in a nastiest shell 영혼 없는 네 목숨을 끊으러 and watch you die You can try but you can't hide It's a takedown, I'ma take you out, you break down like, What? It's a takedown, I'ma take you out and I ain't gonna stop I'ma cut you open, lose control, then rip out your heart You'll be beggin' and cryin', all of you dyin' I'ma gear up and take you down Woah-oh, da-da-da, down (La-la-la) It's a takedown Woah-oh, da-da-da, down (Yeah-yeah, yeah-yeah, yeah) I'ma take it down Woah-oh, da-da-da, down (Ooh) It's a takedown (Ooh) Woah-oh, da-da-da, down (Watch me do it, yeah) Take it down",
 "Pray for me now Pray for me now (Dies irae) Pray for me now (Illa) Pray for me now (Vos solve in) Pray for me now (Favilla) Pray for me now (Maledictus) Pray for me now (Erus) Pray for me now (In flamas) Pray for me now (Eternum) I'll be your idol Keeping you in check (Uh), keeping you obsessed (Uh) Play me on repeat, 끝없이 in your head Anytime it hurts (Uh), play another verse (Uh) I can be your sanctuary Know I'm the only one right now (Now) I will love you more when it all burns down More than power, more than gold (Yeah) Yeah, you gave me your heart, now I'm here for your soul I'm the only one who'll love your sins Feel the way my voice gets underneath your skin Listen 'cause I'm preachin' to the choir Can I get the mic a little higher? Gimme your desire I can be the star you rely on (You rely on) 내 황홀의 취해, you can't look away (Hey) Don't you know I'm here to save you Now we runnin' wild Yeah, I'm all you need, I'ma be your idol Uh Uh Uh, 빛이나는 fame, 계속 외쳐, I'm your idol Thank you for the pain 'cause it got me going viral Uh, yeah, 낫지 않는 fever, makin' you a believer 나를 왜 넌 존재하는 idol? Don't let it show, keep it all inside The pain and the shame, keep it outta sight Your obsession feeds our connection 이 순간 give me all your attention You know I'm the only one who'll love your sins Feel the way my voice gets underneath your skin  Listen 'cause I'm preachin' to the choir Can I get the mic a little higher? Gimme your desire I can be the star you rely on (You rely on) 내 황홀의 취해, you can't look away (Yeah) Don't you know I'm here to save you Now we runnin' wild Yeah, I'm all you need, I'ma be your idol Be your idol Living in your mind now Too late 'cause you're mine now I will make you free When you're all part of me (Listen 'cause I'm) Preaching to the choir (Now) Can I get the mic a little higher? Gimme your desire Watch me set your world on fire 내 황홀의 취해, you can't look away (Hey) No one is coming to save you Now we runnin' wild You're down on your knees, I'ma be your idol"
];
let generateK = function (a, ){
    let mk =
        getRandomWord(a) +
    ""
    return mk;
};
k.addEventListener("click", function () {
    let ok = generateK(ks, );
    output.textContent = ok;
});