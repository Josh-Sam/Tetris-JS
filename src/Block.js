import { allPositions, checkRow, setallPositions } from "./gameState";

export default class Block {
  constructor(game, position, color) {
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.isDone = false;
    this.game = game;
    this.image = document.getElementById(color);
    this.position = { x: position.x, y: position.y };
    this.size = 40;
    this.speed = { x: 0, y: this.size };
    this.canMove = true;
  }
  //draws Block
  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size,
      this.size
    );
  }

  //looks for something on left
  canMoveLeft() {
    let bool = this.canMove;
    let futurePosition = {
      x: this.position.x - this.size,
      y: this.position.y
    };
    allPositions.forEach((position) => {
      if (this.positionsEqual(position, futurePosition)) bool = false;
    });
    if (this.position.x === 0) bool = false;
    return bool;
  }

  //looks for something on right
  canMoveRight() {
    let bool = this.canMove;
    let futurePosition = {
      x: this.position.x + this.size,
      y: this.position.y
    };
    allPositions.forEach((position) => {
      if (this.positionsEqual(position, futurePosition)) bool = false;
    });
    if (this.position.x === this.gameWidth - this.size) bool = false;
    return bool;
  }

  //moves block left
  moveLeft() {
    if (this.position.x > 0) {
      this.position.x -= this.size;
    }
  }

  //moves block right
  moveRight() {
    if (this.position.x < this.gameWidth - this.size)
      this.position.x += this.size;
  }

  //Imoblizes the block
  kill() {
    this.canMove = false;

    if (!this.isDone) {
      this.isDone = true;
      this.speed.y = 0;
      allPositions.forEach((position) => {
        if (this.positionsEqual(position, this.position)) {
          this.game.main.up(this.game.currentBlocks);
        }
      });

      allPositions.push(this.position);
      if (checkRow(allPositions, this.position.y)) {
        this.clearRow();
      }
      if (this.position.y <= 0) {
        if (!this.game.gameOver) {
          this.game.gameOver = true;
          alert("Game Over, your score was " + this.game.score);
          window.location.reload();
        }
      }
    }
  }

  //clears a full row
  clearRow() {
    this.game.score += 100;
    this.game.allBlocks = this.game.allBlocks.filter(
      this.isPartofRow(this.position.y)
    );
    setallPositions(allPositions.filter(this.ClearPos(this.position.y)));

    this.game.allBlocks.forEach((block) => {
      if (block.position.y < this.position.y) {
        block.position.y += 40;
      }
    });
  }

  //helpers for clearRow
  isPartofRow(yValue) {
    return function (block) {
      return block.position.y !== yValue;
    };
  }
  ClearPos(yValue) {
    return function (position) {
      return position.y !== yValue;
    };
  }
  positionsEqual(pos1, pos2) {
    if (pos1.x === pos2.x && pos1.y === pos2.y) return true;
    return false;
  }

  //updates the block every frame
  update(deltaTime) {
    this.position.y += this.speed.y;
    let futurePosition = {
      x: this.position.x,
      y: this.position.y + this.speed.y
    };

    allPositions.forEach((position) => {
      if (this.positionsEqual(position, futurePosition)) {
        this.kill();
      }
    });

    if (this.position.y >= this.gameHeight - this.size) {
      this.kill();
    }
  }
}
