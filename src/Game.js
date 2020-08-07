import Shapes from "./Shapes";

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameOver = false;
    this.score = 0;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    Game.GameSpeed = 600;
  }
  start() {
    this.allBlocks = [];
    this.currentBlocks = [];
    this.main = new Shapes(this.allBlocks, this.currentBlocks, this);
  }

  draw(ctx, ctx2) {
    this.allBlocks.forEach((Object) => Object.draw(ctx));

    //background
    ctx2.fillStyle = "#ddf";
    ctx2.fillRect(0, 0, 186, 1050);
    ctx2.fillRect(186, 0, 800, 86);
    ctx2.fillRect(604, 0, 290, 1050);
    ctx2.fillRect(186, 904, 800, 100);
    ctx2.fillStyle = "Black";
    ctx2.font = "50px Arial";
    ctx2.fillText("Score: " + this.score, 295, 80);
  }

  NextBlock(deltaTime) {
    if (
      this.currentBlocks[0].isDone ||
      this.currentBlocks[1].isDone ||
      this.currentBlocks[2].isDone ||
      this.currentBlocks[3].isDone
    )
      this.main.update(this.allBlocks, this.currentBlocks, this);
    this.currentBlocks.forEach((Object) => Object.update(deltaTime));
  }
}
