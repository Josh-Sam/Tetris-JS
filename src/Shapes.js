import InputHandler from "./input";
import Block from "./Block";
import {
  choosePeice,
  spinPeice,
  addPositons,
  allPositions,
  findFutures
} from "./gameState";
export default class Shapes {
  //function to create a block object and add it to the necessary arrayes
  static createBlock(allBlocks, currentBlocks, game, position, color) {
    this.block = new Block(game, position, color);
    allBlocks.push(this.block);
    currentBlocks.push(this.block);
  }

  //function to kill blcoks and remove them from necessary arrays
  static KillBlocks(block1, block2, block3, block4, currentgameObjects) {
    block1.kill();
    block2.kill();
    block3.kill();
    block4.kill();

    currentgameObjects.shift();
    currentgameObjects.shift();
    currentgameObjects.shift();
    currentgameObjects.shift();
  }

  //setup and create the first shape
  constructor(gameObjects, currentgameObjects, game) {
    this.rotatable = true;
    this.problem = false;
    this.game = game;
    this.orientation = 1;
    let apositions = [];
    apositions = choosePeice();
    this.name = apositions[4];
    Shapes.createBlock(
      gameObjects,
      currentgameObjects,
      game,
      apositions[0],
      apositions[4]
    );
    Shapes.createBlock(
      gameObjects,
      currentgameObjects,
      game,
      apositions[1],
      apositions[4]
    );
    Shapes.createBlock(
      gameObjects,
      currentgameObjects,
      game,
      apositions[2],
      apositions[4]
    );
    Shapes.createBlock(
      gameObjects,
      currentgameObjects,
      game,
      apositions[3],
      apositions[4]
    );
    this.inputer = new InputHandler(
      currentgameObjects[0],
      currentgameObjects[1],
      currentgameObjects[2],
      currentgameObjects[3],
      this
    );
  }

  //moves current block up incase the go somewhere their not supposed to
  up(currentgameObjects) {
    currentgameObjects[0].position.y -= 40;
    currentgameObjects[1].position.y -= 40;
    currentgameObjects[2].position.y -= 40;
    currentgameObjects[3].position.y -= 40;
  }

  //helper method
  positionsEqual(pos1, pos2) {
    if (pos1.x === pos2.x && pos1.y === pos2.y) return true;
    return false;
  }

  //checks if the shape can rotate
  canRotate(futurePos) {
    allPositions.forEach((position) => {
      if (this.positionsEqual(position, futurePos[0])) {
        this.rotatable = false;
      }
    });
    allPositions.forEach((position) => {
      if (this.positionsEqual(position, futurePos[1])) {
        this.rotatable = false;
      }
    });
    allPositions.forEach((position) => {
      if (this.positionsEqual(position, futurePos[2])) {
        this.rotatable = false;
      }
    });
    allPositions.forEach((position) => {
      if (this.positionsEqual(position, futurePos[3])) {
        this.rotatable = false;
      }
    });
    futurePos.forEach((position) => {
      //console.log(position.x);
      if (position.x < 0 || position.x > 360) this.rotatable = false;
    });
  }

  //rotates the peice
  rotate() {
    let changes = spinPeice(this.name, this.orientation);
    let futurePos = findFutures(this.game.currentBlocks, changes);
    this.canRotate(futurePos);
    if (this.rotatable) {
      addPositons(this.game.currentBlocks, changes);
      if (this.orientation < 4) {
        this.orientation++;
      } else {
        this.orientation = 1;
      }
    }
    this.rotatable = true;
  }

  //updates the shape every frame
  update(gameObjects, currentgameObjects, game) {
    if (!this.problem) {
      let positions = [];
      positions = choosePeice();
      Shapes.KillBlocks(
        currentgameObjects[0],
        currentgameObjects[1],
        currentgameObjects[2],
        currentgameObjects[3],
        currentgameObjects
      );
      Shapes.createBlock(
        gameObjects,
        currentgameObjects,
        game,
        positions[0],
        positions[4]
      );
      Shapes.createBlock(
        gameObjects,
        currentgameObjects,
        game,
        positions[1],
        positions[4]
      );
      Shapes.createBlock(
        gameObjects,
        currentgameObjects,
        game,
        positions[2],
        positions[4]
      );
      Shapes.createBlock(
        gameObjects,
        currentgameObjects,
        game,
        positions[3],
        positions[4]
      );
      if (allPositions.length + 4 !== gameObjects.length) {
        this.problem = true;
      }

      this.orientation = 1;
      this.name = positions[4];
      this.inputer.NewBlock(
        currentgameObjects[0],
        currentgameObjects[1],
        currentgameObjects[2],
        currentgameObjects[3],
        this
      );
    } else {
      if (allPositions.length - 4 === gameObjects.length) {
        allPositions.pop();
        allPositions.pop();
        allPositions.pop();
        allPositions.pop();
        this.problem = false;
      }
    }
  }
}
