//@ts-check

/** @type { HTMLCanvasElement } */
//@ts-ignore This is an HTML Canvas
const canvas = document.getElementById("game-canvas");

const ctx = canvas.getContext("2d");

const HEIGHT = 600;
const WIDTH = 800;
canvas.height = HEIGHT;
canvas.width = WIDTH;