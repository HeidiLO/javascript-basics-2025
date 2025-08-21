// This will be our first javascript file

let mine = document.getElementById("My name");
let output = document.getElementById("name");
let myname = [
    "this is my name",
    "Whatever I want",
    "This is super code",
    "Blood on that bus",
    "nooo - piper "
];

let getRandomIndex = function (a) {
    let rand = Math.random() * a.length;
    return Math.floor(rand);
};
let getRandomWord = function (a) {
    return a[getRandomIndex(a)];
};
let generateName = function (a, h, v, adj, n) {
    let mynames =
        getRandomWord(a) +
        " "
    console.log(mynames);
    return mynames;
};
mine.addEventListener("click", function () {
    let name = generateName(myname, "is");
    output.textContent = name;
});