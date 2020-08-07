export var allPositions = [];

export function setallPositions(positions) {
  allPositions = positions;
}

//finds the the new position of a peice when it rotates
export function spinPeice(name, orientation) {
  let changes = [];
  switch (name) {
    case "O":
      changes.push({ x: 0, y: 0 });
      changes.push({ x: 0, y: 0 });
      changes.push({ x: 0, y: 0 });
      changes.push({ x: 0, y: 0 });
      break;
    case "I":
      switch (orientation) {
        case 1:
          changes.push({ x: 40, y: -80 });
          changes.push({ x: 0, y: -40 });
          changes.push({ x: -40, y: 0 });
          changes.push({ x: -80, y: 40 });
          break;
        case 2:
          changes.push({ x: 80, y: 40 });
          changes.push({ x: 40, y: 0 });
          changes.push({ x: 0, y: -40 });
          changes.push({ x: -40, y: -80 });
          break;
        case 3:
          changes.push({ x: -40, y: 80 });
          changes.push({ x: 0, y: 40 });
          changes.push({ x: 40, y: 0 });
          changes.push({ x: 80, y: -40 });
          break;
        case 4:
          changes.push({ x: -80, y: -40 });
          changes.push({ x: -40, y: 0 });
          changes.push({ x: 0, y: 40 });
          changes.push({ x: 40, y: 80 });
          break;
        default:
          break;
      }
      break;
    case "L":
      switch (orientation) {
        case 1:
          changes.push({ x: -40, y: -40 });
          changes.push({ x: 0, y: 0 });
          changes.push({ x: 40, y: 40 });
          changes.push({ x: -80, y: 0 });
          break;
        case 2:
          changes.push({ x: 40, y: -40 });
          changes.push({ x: 0, y: 0 });
          changes.push({ x: -40, y: 40 });
          changes.push({ x: 0, y: -80 });
          break;
        case 3:
          changes.push({ x: 40, y: 40 });
          changes.push({ x: 0, y: 0 });
          changes.push({ x: -40, y: -40 });
          changes.push({ x: 80, y: 0 });
          break;
        case 4:
          changes.push({ x: -40, y: 40 });
          changes.push({ x: 0, y: 0 });
          changes.push({ x: 40, y: -40 });
          changes.push({ x: 0, y: 80 });
          break;
        default:
          break;
      }
      break;
    case "J":
      switch (orientation) {
        case 1:
          changes.push({ x: 0, y: -80 });
          changes.push({ x: -40, y: -40 });
          changes.push({ x: 0, y: 0 });
          changes.push({ x: 40, y: 40 });
          break;
        case 2:
          changes.push({ x: 80, y: 0 });
          changes.push({ x: 40, y: -40 });
          changes.push({ x: 0, y: 0 });
          changes.push({ x: -40, y: 40 });
          break;
        case 3:
          changes.push({ x: 0, y: 80 });
          changes.push({ x: 40, y: 40 });
          changes.push({ x: 0, y: 0 });
          changes.push({ x: -40, y: -40 });
          break;
        case 4:
          changes.push({ x: -80, y: 0 });
          changes.push({ x: -40, y: 40 });
          changes.push({ x: 0, y: 0 });
          changes.push({ x: 40, y: -40 });
          break;
        default:
          break;
      }
      break;
    case "S":
      switch (orientation) {
        case 1:
          changes.push({ x: 0, y: 0 });
          changes.push({ x: 40, y: 40 });
          changes.push({ x: -80, y: 0 });
          changes.push({ x: -40, y: 40 });
          break;
        case 2:
          changes.push({ x: 0, y: 0 });
          changes.push({ x: -40, y: -40 });
          changes.push({ x: 80, y: -0 });
          changes.push({ x: 40, y: -40 });
          break;
        case 3:
          changes.push({ x: 0, y: 0 });
          changes.push({ x: 40, y: 40 });
          changes.push({ x: -80, y: 0 });
          changes.push({ x: -40, y: 40 });
          break;
        case 4:
          changes.push({ x: 0, y: 0 });
          changes.push({ x: -40, y: -40 });
          changes.push({ x: 80, y: -0 });
          changes.push({ x: 40, y: -40 });
          break;
        default:
          break;
      }
      break;
    case "Z":
      switch (orientation) {
        case 1:
          changes.push({ x: 0, y: 0 });
          changes.push({ x: 40, y: 40 });
          changes.push({ x: -80, y: 0 });
          changes.push({ x: -40, y: 40 });
          break;
        case 2:
          changes.push({ x: 0, y: 0 });
          changes.push({ x: -40, y: -40 });
          changes.push({ x: 80, y: -0 });
          changes.push({ x: 40, y: -40 });
          break;
        case 3:
          changes.push({ x: 0, y: 0 });
          changes.push({ x: 40, y: 40 });
          changes.push({ x: -80, y: 0 });
          changes.push({ x: -40, y: 40 });
          break;
        case 4:
          changes.push({ x: 0, y: 0 });
          changes.push({ x: -40, y: -40 });
          changes.push({ x: 80, y: -0 });
          changes.push({ x: 40, y: -40 });
          break;
        default:
          break;
      }
      break;
    case "T":
      switch (orientation) {
        case 1:
          changes.push({ x: -40, y: -40 });
          changes.push({ x: 0, y: 0 });
          changes.push({ x: 40, y: 40 });
          changes.push({ x: -40, y: 40 });
          break;
        case 2:
          changes.push({ x: 40, y: -40 });
          changes.push({ x: 0, y: 0 });
          changes.push({ x: -40, y: 40 });
          changes.push({ x: -40, y: -40 });
          break;
        case 3:
          changes.push({ x: 40, y: 40 });
          changes.push({ x: 0, y: 0 });
          changes.push({ x: -40, y: -40 });
          changes.push({ x: 40, y: -40 });
          break;
        case 4:
          changes.push({ x: -40, y: 40 });
          changes.push({ x: 0, y: 0 });
          changes.push({ x: 40, y: -40 });
          changes.push({ x: 40, y: 40 });
          break;
        default:
          break;
      }
      break;

    default:
      break;
  }
  return changes;
}

//Chooses a random shape for the next Peice
export function choosePeice() {
  let num = Math.floor(Math.random() * 7) + 1;
  let positions = [];
  switch (num) {
    case 1:
      positions.push({ x: 160, y: -40 });
      positions.push({ x: 160, y: -80 });
      positions.push({ x: 200, y: -40 });
      positions.push({ x: 200, y: -80 });
      positions.push("O");
      break;
    case 2:
      positions.push({ x: 120, y: -40 });
      positions.push({ x: 160, y: -40 });
      positions.push({ x: 200, y: -40 });
      positions.push({ x: 240, y: -40 });
      positions.push("I");
      break;
    case 3:
      positions.push({ x: 160, y: -40 });
      positions.push({ x: 160, y: -80 });
      positions.push({ x: 160, y: -120 });
      positions.push({ x: 200, y: -40 });
      positions.push("L");
      break;
    case 4:
      positions.push({ x: 160, y: -40 });
      positions.push({ x: 200, y: -40 });
      positions.push({ x: 200, y: -80 });
      positions.push({ x: 200, y: -120 });
      positions.push("J");
      break;
    case 5:
      positions.push({ x: 160, y: -80 });
      positions.push({ x: 160, y: -120 });
      positions.push({ x: 200, y: -40 });
      positions.push({ x: 200, y: -80 });
      positions.push("S");
      break;
    case 6:
      positions.push({ x: 160, y: -40 });
      positions.push({ x: 160, y: -80 });
      positions.push({ x: 200, y: -80 });
      positions.push({ x: 200, y: -120 });
      positions.push("Z");
      break;
    case 7:
      positions.push({ x: 160, y: -40 });
      positions.push({ x: 160, y: -80 });
      positions.push({ x: 160, y: -120 });
      positions.push({ x: 200, y: -80 });
      positions.push("T");
      break;

    default:
      break;
  }
  return positions;
}

//checks if a row is full
export function checkRow(allPositions, yValue) {
  let num = 0;
  allPositions.forEach((position) => {
    if (position.y === yValue) num++;
  });

  if (num === 10) return true;
  return false;
}

//finds the future positition to see if a rotation can be done
export function findFutures(OGPositions, changes) {
  let futures = [
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 }
  ];
  futures[0].y = OGPositions[0].position.y + changes[0].y;
  futures[0].x = OGPositions[0].position.x + changes[0].x;
  futures[1].y = OGPositions[1].position.y + changes[1].y;
  futures[1].x = OGPositions[1].position.x + changes[1].x;
  futures[2].y = OGPositions[2].position.y + changes[2].y;
  futures[2].x = OGPositions[2].position.x + changes[2].x;
  futures[3].y = OGPositions[3].position.y + changes[3].y;
  futures[3].x = OGPositions[3].position.x + changes[3].x;
  return futures;
}

//rotates the peice
export function addPositons(OGPositions, changes) {
  OGPositions[0].position.y += changes[0].y;
  OGPositions[0].position.x += changes[0].x;
  OGPositions[1].position.y += changes[1].y;
  OGPositions[1].position.x += changes[1].x;
  OGPositions[2].position.y += changes[2].y;
  OGPositions[2].position.x += changes[2].x;
  OGPositions[3].position.y += changes[3].y;
  OGPositions[3].position.x += changes[3].x;
}
