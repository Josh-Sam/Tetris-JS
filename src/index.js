import Game from "/src/Game";
let score = 0;
let canvas2 = document.getElementById("fullScreen");
let ctx2 = canvas2.getContext("2d");
ctx2.fillStyle = "#ddf";
ctx2.fillRect(0, 0, 186, 1050);
ctx2.fillRect(186, 0, 800, 86);
ctx2.fillRect(604, 0, 290, 1050);
ctx2.fillRect(186, 904, 800, 100);
ctx2.fillStyle = "Black";
ctx2.font = "50px Arial";
ctx2.fillText("Score: 0" + score, 295, 80);
let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const gameWidth = 400;
const gameHeight = 800;

let game = new Game(gameWidth, gameHeight);
game.start();

let lastTime = 0;

function gameLoop(timeStamp) {
  let deltaTime = timeStamp - lastTime;
  if (deltaTime >= Game.GameSpeed) {
    lastTime = timeStamp;
    game.NextBlock(deltaTime);
  }
  ctx.clearRect(0, 0, gameWidth, gameHeight);
  ctx2.clearRect(0, 0, 800, 1000);
  game.draw(ctx, ctx2);
  requestAnimationFrame(gameLoop);
}
requestAnimationFrame(gameLoop);
