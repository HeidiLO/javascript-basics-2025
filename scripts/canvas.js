//@ts-check

/** @type { HTMLCanvasElement } */
//@ts-ignore This is an HTML Canvas
const CANVAS = document.getElementById("game-canvas");
/**@type {CanvasRenderingContext2D} */
//@ts-ignore
const CTX = CANVAS.getContext("2d");
const HEIGHT = 500;
const WIDTH = 890;
CANVAS.height = HEIGHT;
CANVAS.width = WIDTH;
class Box{
    constructor(x,y,color, ){
        this.x = x;
        this.y = y;
        this.color = color;
        this.speed = 15;
        this.width = 100;
        this.height = 2;
        this.xDir = 5;
        this.yDir =5;
    }

    draw (){
            CTX.fillStyle = this.color
    CTX.fillRect (this.x,this.y,this.width, this.height)
    CTX.fillStyle ="black"
    CTX.fillRect (this.x+25,this.y,this.width - 50, this.height)
    CTX.fillStyle = this.color
    CTX.fillRect (this.x +37.5, this.y, this.width - 75, this.height)  
    }

    update (){
        let top = this.y;
        let bottom = this.y + this.height;
        let left = this.x;
        let right = this.x + this.width;
        if (top < 0){
            this.yDir = 10;
        } else if (bottom > HEIGHT){
            this.yDir = - 30;
        }else if (left < 0){
            this.xDir = 10;
        } else if (right> WIDTH){
            this.xDir = - 20;
        }

        this.x += this.xDir;
        this.y += this.yDir;
    };
};
/**@type{ Box[]} */
let boxes = [];
let colors = [
    "pink",
   "PaleVioletRed",
   "MediumVioletRed",
   "DeepPink",
   "HotPink",
   "LightPink",
   "DarkRed",
   "FireBrick",
   "Red",
   "Crimson",
   "LightSalmon",
   "DarkSalmon",
   "Salmon",
   "LightCoral",
   "IndianRed",
   "OrangeRed",
   "Tomato",
   "Coral",
   "Maroon",
   "HotPink",
    "HotPink",
    "DarkRed"
];
for (let i =0; i <= 1000; i++){
    let color = colors[Math.floor(Math.random()*colors.length)]
    let box = new Box(0,0, color);
    box.x = Math.random() * WIDTH - 100;
    box.y = Math.random() * HEIGHT -2;
    box.yDir = Math.floor(Math.random()* 5 + 5);
    box.xDir = Math.floor(Math.random()* 5 + 5);
    boxes.push(box);
};
//CTX.fillStyle = "black";
//CTX.arc(0+ 300, 0 + 200, 3, 0, 2 * Math.PI);
//CTX.fill();

function drawloop(){
    CTX.clearRect(0,0,WIDTH,HEIGHT)
    boxes.forEach((b)=> {
        b.draw();
        b.update();
    });
    requestAnimationFrame(drawloop);
};
requestAnimationFrame(drawloop);