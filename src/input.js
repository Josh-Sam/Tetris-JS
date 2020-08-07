import Game from "./Game";

export default class InputHandler {
  constructor(Block1, Block2, Block3, Block4, Shape) {
    this.block1 = Block1;
    this.block2 = Block2;
    this.block3 = Block3;
    this.block4 = Block4;

    document.addEventListener("keydown", (event) => {
      switch (event.keyCode) {
        case 40:
          Game.GameSpeed = 100;
          break;
        default:
          break;
      }
    });
    document.addEventListener("keyup", (event) => {
      switch (event.keyCode) {
        case 37:
          if (
            this.block1.canMoveLeft() &&
            this.block2.canMoveLeft() &&
            this.block3.canMoveLeft() &&
            this.block4.canMoveLeft()
          ) {
            this.block1.moveLeft();
            this.block2.moveLeft();
            this.block3.moveLeft();
            this.block4.moveLeft();
          }
          break;
        case 40:
          Game.GameSpeed = 600;
          break;
        case 38:
          Shape.rotate();
          break;
        case 39:
          if (
            this.block1.canMoveRight() &&
            this.block2.canMoveRight() &&
            this.block3.canMoveRight() &&
            this.block4.canMoveRight()
          ) {
            this.block1.moveRight();
            this.block2.moveRight();
            this.block3.moveRight();
            this.block4.moveRight();
          }
          break;
        default:
          break;
      }
    });
  }
  NewBlock(Block1, Block2, Block3, Block4) {
    this.block1 = Block1;
    this.block2 = Block2;
    this.block3 = Block3;
    this.block4 = Block4;
  }
}
