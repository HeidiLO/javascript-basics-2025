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
 "Pray for me now Pray for me now (Dies irae) Pray for me now (Illa) Pray for me now (Vos solve in) Pray for me now (Favilla) Pray for me now (Maledictus) Pray for me now (Erus) Pray for me now (In flamas) Pray for me now (Eternum) I'll be your idol Keeping you in check (Uh), keeping you obsessed (Uh) Play me on repeat, 끝없이 in your head Anytime it hurts (Uh), play another verse (Uh) I can be your sanctuary Know I'm the only one right now (Now) I will love you more when it all burns down More than power, more than gold (Yeah) Yeah, you gave me your heart, now I'm here for your soul I'm the only one who'll love your sins Feel the way my voice gets underneath your skin Listen 'cause I'm preachin' to the choir Can I get the mic a little higher? Gimme your desire I can be the star you rely on (You rely on) 내 황홀의 취해, you can't look away (Hey) Don't you know I'm here to save you Now we runnin' wild Yeah, I'm all you need, I'ma be your idol Uh Uh Uh, 빛이나는 fame, 계속 외쳐, I'm your idol Thank you for the pain 'cause it got me going viral Uh, yeah, 낫지 않는 fever, makin' you a believer 나를 왜 넌 존재하는 idol? Don't let it show, keep it all inside The pain and the shame, keep it outta sight Your obsession feeds our connection 이 순간 give me all your attention You know I'm the only one who'll love your sins Feel the way my voice gets underneath your skin  Listen 'cause I'm preachin' to the choir Can I get the mic a little higher? Gimme your desire I can be the star you rely on (You rely on) 내 황홀의 취해, you can't look away (Yeah) Don't you know I'm here to save you Now we runnin' wild Yeah, I'm all you need, I'ma be your idol Be your idol Living in your mind now Too late 'cause you're mine now I will make you free When you're all part of me (Listen 'cause I'm) Preaching to the choir (Now) Can I get the mic a little higher? Gimme your desire Watch me set your world on fire 내 황홀의 취해, you can't look away (Hey) No one is coming to save you Now we runnin' wild You're down on your knees, I'ma be your idol",
 "Nothing but the truth now Nothing but the proof of what I am The worst of what I came from, patterns I'm ashamed of Things that even I don't understand I tried to fix it, I tried to fight it My head was twisted, my heart divided My lies all collided I don't know why I didn't trust you to be on my side I broke into a million pieces, and I can't go back But now I'm seeing all the beauty in the broken glass The scars are part of me, darkness and harmony My voice without the lies, this is what it sounds like Why did I cover up the colors stuck inside my head? I should've let the jagged edges meet the light instead Show me what's underneath, I'll find your harmony The song we couldn't write, this is what it sounds like We're shattering the silence, we're rising defiant Shouting in the quiet, you're not alone We listened to the demons, we let them get between us But none of us are out here on our own So, we were cowards, so, we were liars So, we're not heroes, we're still survivors The dreamers, the fighters, no lying, I'm tired But dive in the fire and I'll be right here by your side We broke into a million pieces, and we can't go back But now we're seeing all the beauty in the broken glass The scars are part of me, darkness and harmony My voice without the lies, this is what it sounds like Why did we cover up the colors stuck inside our head? Get up and let the jagged edges meet the light instead Show me what's underneath, I'll find your harmony Fearless and undefined, this is what it sounds like This is what it sounds like (Oh, oh, oh) Hey, hey This is what it sounds like (Oh, oh, oh) Hey, hey This is what it sounds like (Oh, oh, oh) Hey, hey Oh, this is what it... this is what it... This is what it sounds like We broke into a million pieces, and we can't go back But now I'm seeing all the beauty in the broken glass The scars are part of me, darkness and harmony My voice without the lies, this is what it sounds like Why did we cover up the colors stuck inside our head? Get up and let the jagged edges meet the light instead Show me what's underneath, I'll find your harmony Fearless and undefined, this is what it sounds like My voice without the lies, this is what it sounds like Fearless and undefined, this is what it sounds like Truth after all this time, our voices all combined When darkness meets the light, this is what it sounds like",
 "I tried to hide but something broke I tried to sing, couldn't hit the notes The words kept catching in my throat I tried to smile, I was suffocating though But here with you, I can finally breathe You say you're no good, but you're good for me I've been hoping to change, now I know we can change But I won't if you're not by my side Why does it feel right every time I let you in? Why does it feel like I can tell you anything? All the secrets that keep me in chains and All the damage that might make me dangerous You got a dark side, guess you're not the only one What if we both tried fighting what we're running from?  We can't fix it if we never face it What if we find a way to escape it? We could be free Free We can't fix it if we never face it Let the past be the past 'til it's weightless Ooh, time goes by, and I lose perspective Yeah, hope only hurts, so I just forget it But you're breaking through all the dark in me When I thought that nobody could And you're waking up all these parts of me That I thought were buried for good Between imposter and this monster I been lost inside my head Ain't no choice when all these voices Keep me pointing towards no end It's just easy when I'm with you No one sees me the way you do I don't trust it, but I want to I keep coming back to Why does it feel right every time I let you in? Why does it feel like I can tell you anything? We can't fix it if we never face it What if we find a way to escape it? We could be free Free We can't fix it if we never face it Let the past be the past 'til it's weightless Oh, so take my hand, it's open Free, free What if we heal what's broken? Free, free I tried to hide, but something broke I couldn't sing, but you give me hope We can't fix it if we never face it Let the past be the past 'til it's weightless",
 "Ugh, you came at a bad time But you just crossed the line You wanna get wild?  Okay, I'll show you wild Better come right, better luck tryin', gettin' to our level 'Cause you might die, never the time, tryna start a battle Bleeding isn't in my blood, 뼈속부터 달라서 [ppyeosokbuteo dallaseo]  Beating you is what I do-do-do, yeah Body on body I'm naughty, not even sorry And when you pull up, I'll pull up A little late to the party (Na-na-na-na) Locked and loaded, I was born for this There ain't no point in avoiding it Annoyed? A bit 불을 비춰 다 비켜, 네 앞길을 뺏겨 [Bureul bichwo da bikyeo, ne apgireul ppaetgyeo] Knocking you out like a lullaby Hear that sound ringing in your mind Better sit down for the show 'Cause I'm gonna show you how it's done-done-done (Hey) Huntrix don't miss How it's done-done-done (Hey) Huntrix don't quit How it's done-done-done Run, run, we run the town Whole world playin' our sound Turnin' up, it's going down Huntrix show this, how it's done-done-done Yeah, something about when you come for the crown That's so humbling, huh? 갑자기 왜 그래? 먼저 건드려, 왜? [Gapjagi wae geurae? Meonjeo geondeuryeo, wae?] 이제야 포기해, what? [Ijeya pogihae, what?] Nothing to us Run up, you're done up, we come up From sunup to sundown, so come out to play Won either way, we're one in a million We killin', we bring it, you want it? Okay Heels, nails, blade, mascara Fit check for my napalm eracNeed to beat my face, make it cute and savage Mirror, mirror on my phone, who's the baddest? (Us, hello?) Knocking you out like a lullaby Hear that sound ringing in your mind Better sit down for the show 'Cause I'm gonna show you (I'm gonna show you) (I'm gonna show you) How it's done-done-done I don't talk, but I bite, full of venom (Uh) Spittin' facts, you know that's How it's done-done-done Okay, like, I know I ramble But when shootin' my words, I go Rambo Took blood, sweat, and tears, to look natural (Uh) That's how it's done-done-done Hear our voice unwavering 'Til our song defeats the night Makin' fear afraid to breathe 'Til the dark meets the light (how it's done-done-done) Run, run, we run the town (done-done-done) Whole world playin' our sound (done-done-done) Turnin' up, it's going down (done-done-done) Huntrix, show this how it's done-done-done We hunt you down (down) (Done-done-done) We got you now (Got you now) (Done-done-done) We show you how-how-how (Show you how) Huntrix, don't miss, how it's done-done-done",
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
let stay = document.getElementById("strayKids");
let stray = [
    "Hip-hip (Hooray) Hip-hip (Hooray) Hip-hip, hip-hip Yuh, yuh, yuh, yuh We're moving forward with maximum power And we're gonna dominate, pop it 장식하지, big news, topic 경험치는 수많은 trophy No one, nobody can stop me 수많은 억까는 도움닫기 Jump up, jump up Like a pop-up, toaster, lift Working off time That ratio got us going worldwide (Worldwide) Thirsty day and night They put us in the desert but we survive Busy giving our light Unlike them, we're getting all the spotlight Listen to the war cry Karma, karma, karma, karma Hip-hip (Hooray) Hip-hip (Hooray) Hip-hip, hip-hip Karma, karma, karma, karma Ceremony Hip, hip, hip, hip, hip, hip, hip (Hooray) Woah, ceremony Hip, hip, hip, hip, hip, hip, hip (Hooray) We did it, 소리 질러, wow Slide, 반지 kiss, muah 받아 내 상 마치 부케 봐라 내 두 손은 두둑해 바쁠 때 눈코 뜰 새가 없대 But that's okay, 소감을 또 준비해 I feel like 우주 붕, 붕, 붕 (Ho) You and I, let's go celebrate 이 상태는 엄청나 삐끗삐끗 터지는 emergency We don't care, show you 나 버젓이 여기저기, look at our paradise 어디까지 갈지 예상 밖이야 시끌시끌 북적해 우리 근처는 언제나 소음 발생이야 Working off time That ratio got us going worldwide (Worldwide) Thirsty day and night They put us in the desert but we survive Busy giving our light Unlike them, we're getting all the spotlight, yeah Listen to the war cry Karma, karma, karma, karma Hip-hip (Hooray) Hip-hip (Hooray) Hip-hip, hip-hip Karma, karma, karma, karma Ceremony Hip, hip, hip, hip, hip, hip, hip (Hooray) Woah, ceremony Hip, hip, hip, hip, hip, hip, hip (Hooray) Yeah, we gon' celebrate 'cause we got good Karma, karma, karma, karma Calmer, calmer, calmer, that's our Karma, karma, karma, karma Yeah, we gon' celebrate 'cause we got good Karma, karma, karma, karma Calmer, calmer, calmer Oh, ceremony",
    "사건 발생 잊지 못할 사건 치명적인 매력에 홀라당 빠져 자꾸 나를 자극하는 넌 출처가 없는 문제야 풀어야 할 숙제야 Can I be your boyfriend? 너를 대하는 태도 거짓 하나 없어 no cap 너에게 하고 싶은 말로 가득 찼어 my case 완벽함 앞에 어떤 말로도 부족해 You got me losing patience 걷잡을 수 없는 emotion 떠올라 네 모습 I never feel alright 수많은 감정이 충돌해 왜 이래 Rolling in the deep inside my head You got me bad 무장해제 신속하게 네게로 moving, on my way Why do I keep getting attracted 자석 같이 끌려가 I cannot explain this reaction 이것밖에 143 Why do I keep getting attracted 네 모습만 떠올라 I cannot explain this emotion 143 I LOVE YOU A B C D E F G I Wanna send my code to you 8 letters is all it takes And I'm gonna let you know oh 너 말곤 높이 쌓아뒀지 barricade (barricade) 원하는 대로 불러도 돼 Code name (call me baby) 욕심이래도 되고 싶어 soulmate (whoo) 이 맘은 점점 더 upgrade 'cause You got me losing patience 걷잡을 수 없는 emotion 떠올라 네 모습 I never feel alright 수많은 감정이 충돌해 왜 이래 Rolling in the deep inside my head You got me bad무장해제 신속하게 네게로 moving, on my way Why do I keep getting attracted 자석 같이 끌려가 I cannot explain this reaction 이것밖에 143 Why do I keep getting attracted 네 모습만 떠올라 I cannot explain this emotion 143 I LOVE YOU Heartbeat 나의 모든 상태 지금 위기 (위기) 너의 모습 ain't no 'false' 나의 속맘 다시 repeat (repeat) Walking next to you but I'm fallin 더 깊게 빠져들어 끌리지 You're pulling me deeper and deeper I try to get out but I can't stop Can I be the one? Yeah I'll be the one 무모하게 도전해 오그라드는 표현 머릿속이 띵하고 무감정은 손절 Moving, I'm on my way Why do I keep getting attracted 네 모습만 떠올라 I cannot explain this emotion 143 I LOVE YOU Why do I keep getting attracted 자석 같이 끌려가 I cannot explain this reaction (이것밖에) I'm gonna let you know (know) That I'm just gonna go (go) And hold you so I'm never letting go I'm gonna let you know (know) That I'm just gonna go (just go) Yeah 난 너에게로 지금 출발합니다 바로 like I'm Never letting go oh I cannot explain this emotion 143 I LOVE YOU",
    "Boom, boom, chk, chk, boom (Brrah) 정중앙 흑색의 저 점도 맞춰 내 재빠른 계획도 허점 없이 완벽한 판도 위에서 춤춰 내 plan대로 keep going Sick of this life, it's regular 승리를 너무 과식했지 배불러 (Ayy) 산책도 할 겸 허리띠 매 둘러 우린 우주로 나머지 전부 kneel, I'm strong  Yeah, yeah, yeah, yeah, 안 되는 것 없이 I do it (Do it) Just pull out my trigger, I got that (Woo) I'ma pop, pop, pop, take a shot, yeah Shoot down my goals one by one, I snipe them Filling up my truck Yeah, you want that ride (Boom) Hit you like a truck I'ma make you fly (Boom) Vamos, I know that you want it (Boom) Lobos, we cannot stop hunting (Boom) Ra-ta-ta-ta, I'ma make it Boom, boom, chk, chk, boom (Boom) Vamos, I know that you want it (Boom) Chaos, we so catastrophic (Boom) Ra-ta-ta-ta, I'ma make it Boom, boom, chk, chk, boom  (Boom) Cliché 파괴 자체가 더 cliché (Boom) 나에 대한 견해 전부 유지해 (Boom) 바뀐 건 없어 I'm not a changed man 내 행보는 여전히 그다음 level에만 대입해 목표치에 한 발씩  한발치 더 다다랐지 I'm the owner of my goal, 주인 잘 만난 복 I make it right, 영점 조준 clear 정적을 깨 버리지 나의 trigger, fire (Fire) 저 끝까지 과녁을 더 위로 올려 (My amigo) Filling up my truck Yeah, you want that ride (Boom) Hit you like a truck I'ma make you fly  (Boom) Vamos, I know that you want it (Boom) Lobos, we cannot stop hunting (Boom) Ra-ta-ta-ta, I'ma make it Boom, boom, chk, chk, boom (Boom) Vamos, I know that you want it (Boom) Chaos, we so catastrophic (Boom) Ra-ta-ta-ta, I'ma make it Boom, boom, chk, chk, boom  깊이 더 파고들어 My bullet goes 탕탕탕 이건 la vida loca 이건 good shot, shot, shot 깊이 더 파고들어 My bullet goes 탕탕탕 이건 la vida loca Boom, boom, chk, chk, boom",
    "뚜뚜뚜뚜뚜뚜 웃겨? 머리가 아픈 게 웃겨? A급 감성이 웃겨? 하 CHEESE 옷차림 헤어스타일 내 눈엔 폼나지 외부인 외계인 취급은 익숙해 난 뻔뻔하지 Funny funny 날 보고 웃었다면 더 빵빵 터지게 해줄게 딱 봐도 born to be 광대 다 같이 붕붕 날아볼래? Hold up 우습기에 굳었지 파마산 치즈 너네 한마디면 분위기 freeze개그 코드가 모자라 치즈- Jeez Jeez  I love what you hate 네가 뭐라든 재밌거든 다 Thank you, I love it 헛소리 대판 벌인다검지 중지 약지 새끼 what 검지 중지 약지 새끼 접어 what 씹고 뜯고 맛보다 즐길 거면서 What's the matter? 정색 말고 인상 좀 피자 like 반죽 CHEESE 뚜뚜뚜뚜뚜뚜 웃겨? 머리가 아픈 게 웃겨? A급 감성이 웃겨? 웃겨 CHEESE 비둘기 까치가 웃겨? 까마귀 소리가 웃겨? A급 감성이 웃겨? 웃겨 CHEESE Yeah yeah yeah yeah yeah yeahYeah yeah yeah yeah 웃어봐 Yeah yeah yeah yeah yeah yeah yeah yeah yeah CHEESE Yeah yeah yeah yeah yeah yeah Yeah yeah yeah yeah 웃어봐 Yeah yeah yeah yeah yeah yeah Yeah yeah yeah CHEESE  웃기지 내 걸음걸이 우리가 만든 거 다 놀림거리 Look, why did you say it like that? 혓바닥 shotgun 장전 Click Clack Bang 그래 생각해요 네 맘대로 이러쿵저러쿵 I don't know Do what you do, out of 안중 내가 내려가는 건 걍 네 개꿈  검지 중지 약지 새끼 what 검지 중지 약지 새끼 접어 what 씹고 뜯고 맛보다 즐길 거면서 What's the matter? 정색 말고 인상 좀 피자 like 반죽 “자 하나 둘 셋” CHEESE  뚜뚜뚜뚜뚜뚜 웃겨? 머리가 아픈 게 웃겨? A급 감성이 웃겨? 웃겨 CHEESE 비둘기 까치가 웃겨? 까마귀 소리가 웃겨? A급 감성이 웃겨? 웃겨 CHEESE Blue Cheese Cheddar Cheese Parmesan Cheese CHEESE 뚜뚜뚜뚜뚜뚜 웃겨? 머리가 아픈 게 웃겨? A급 감성이 웃겨? 웃겨?! CHEESE  Yeah yeah yeah yeah yeah yeah Yeah yeah yeah yeah 웃어봐 Yeah yeah yeah yeah yeah yeah Yeah yeah yeah CHEESE Yeah yeah yeah yeah yeah yeah Yeah yeah yeah yeah 웃어봐 Yeah yeah yeah yeah yeah yeah Yeah yeah yeah CHEESE"
];
let generates = function (a, ){
    let mk =
        getRandomWord(a) +
    ""
    return mk;
};
stay.addEventListener("click", function () {
    let ok = generateK(stray, );
    output.textContent = ok;
});