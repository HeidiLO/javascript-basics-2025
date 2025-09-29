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
CTX.fillStyle = "black";
CTX.arc(0+ 300, 0 + 200, 3, 0, 2 * Math.PI);
CTX.fill();
let time = 0;
let box = {
    x: 0,
    y: 0, 
    xDir: 5,
    yDir: 5,
    width: 100,
    height : 2,
    draw: function(){
    CTX.fillStyle = "pink"
    CTX.fillRect (this.x,this.y,this.width, this.height)
    CTX.fillStyle ="black"
    CTX.fillRect (this.x+25,this.y,this.width - 50, this.height)
    CTX.fillStyle = "pink"
    CTX.fillRect (this.x +37.5, this.y, this.width - 75, this.height)  
    },
    update: function(){
        let top = this.y;
        let bottom = this.y + this.height;
        let left = this.x;
        let right = this.x + this.width;
        if (top < 0){
            this.yDir = 1;
        } else if (bottom > HEIGHT){
            this.yDir = - 20;
        }else if (left < 0){
            this.xDir = 5;
        } else if (right> WIDTH){
            this.xDir = - 10;
        }

        this.x += this.xDir;
        this.y += this.yDir;
    },
};
function drawloop(timestamp){
     CTX.clearRect(0,0,WIDTH,HEIGHT)
    let omgTime = timestamp - time;
    time = timestamp;
    box.draw();
    box.update();
    requestAnimationFrame(drawloop);
};
requestAnimationFrame(drawloop);