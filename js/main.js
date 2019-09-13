class PlayArea {
  draw() {
    let trs = document.querySelectorAll("tr");

    for (let i = 0; i < trs.length; i++) {
      let trNum = trs[i];
      for (let j = 0; j < trNum.children.length; j++) {
        trNum.children[j].classList.remove("stick");

        switch (this.array[i][j]) {
          case 1:
            trNum.children[j].classList.add("stick");
            break;
          default:
            trNum.children[j].classList.add("default");
        }
      }
    }
  }

  fall() {
    //an array that checks if there is a block under
    let under = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

    for (let i = 19; i >= 0; i--) {
      for (let j = 0; j < 10; j++) {
        if (under[j] == 0) {
          if (this.array[i][j] == 0) {
            //neither there are anything under this array nor it's a block
            under[j] = 0;
          } else {
            //there is nothing under this array and it's a block
            this.array[i + 1][j] = this.array[i][j];
            this.array[i][j] = 0;

            //modify the move array
            if (this.move[i][j] == 1) {
              this.move[i][j] = 0;
              this.move[i + 1][j] = 1;
            }
            under[j] = 0;
          }
        } else {
          if (this.array[i][j] == 0) {
            //A block is under this array and itself is NOT a block
            under[j] = 0;
          } else {
            //A block is under this array and itself is a block
            // if (move[i][j] == 1) {
            //   if (i == 19) {
            //     fixFlag = 1;
            //     fixArray = array.concat();
            //     console.log(fixArray);
            //     return false;
            //   }
            // }
            this.resetMove();
            under[j] = 1;
          }
        }
      }
    }
  }

  resetMove() {
    this.moveFlag = 0;
    for (let i = 0; i < 20; i++) {
      for (let j = 0; j < 10; j++) {
        this.move[i][j] = 0;
      }
    }
  }

  genBlock(blockNum) {
    if (this.moveFlag == 0) {
      switch (blockNum) {
        case 1:
          this.array[0][5] = 1;
          this.array[1][5] = 1;
          this.array[2][5] = 1;
          this.array[3][5] = 1;

          //modifiy the move this.array
          this.move[0][5] = 1;
          this.move[1][5] = 1;
          this.move[2][5] = 1;
          this.move[3][5] = 1;

          break;

        case 2:
          this.array[0][1] = 1;
          this.array[0][2] = 1;
          this.array[1][0] = 1;
          this.array[1][1] = 1;

          //modifiy the move array
          this.move[0][1] = 1;
          this.move[0][2] = 1;
          this.move[1][0] = 1;
          this.move[1][1] = 1;

          break;
      }
      this.moveFlag = 1;
    }
  }

  moveBlockRight() {
    for (let i = 19; i >= 0; i--) {
      let newMove = this.move[i].concat();
      for (let j = 8; j >= 0; j--) {
        if (this.move[i][j] == 1) {
          this.array[i][j + 1] = this.array[i][j];
          this.array[i][j] = 0;
          newMove[j + 1] = 1;
          newMove[j] = 0;
        }
      }
      this.move[i] = newMove;
    }
  }

  moveBlockLeft() {
    for (let i = 19; i >= 0; i--) {
      let newMove = this.move[i].concat();
      for (let j = 1; j < 10; j++) {
        if (this.move[i][j] == 1) {
          this.array[i][j - 1] = this.array[i][j];
          this.array[i][j] = 0;
          newMove[j - 1] = 1;
          newMove[j] = 0;
        }
      }
      this.move[i] = newMove;
    }
  }

  checkDelete() {
    for (let i = 19; i >= 0; i--) {
      if (!this.array[i].includes(0)) {
        for (let j = 0; j < 10; j++) {
          this.array[i][j] = 0;
        }
      }
    }
    this.moveFlag = 0;
  }

  constructor() {
    this.moveFlag = 0;
    this.fixFlag = 0;
    this.array = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];

    this.move = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];

    this.fixArray = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
  }
}

class Game {
  draw() {
    this.playArea.draw();
  }

  fall() {
    this.playArea.fall();
  }

  resetMove() {
    this.playArea.resetMove();
  }

  genBlock(blockNum) {
    this.playArea.genBlock(blockNum);
  }

  moveBlockRight() {
    this.playArea.moveBlockRight();
  }

  moveBlockLeft() {
    this.playArea.moveBlockLeft();
  }

  checkDelete() {
    this.playArea.checkDelete();
  }

  constructor() {
    this.playArea = new PlayArea();

    document.onkeydown = e => {
      switch (e.code) {
        case "Space":
          this.genBlock(2);
          break;

        case "ArrowRight":
          this.moveBlockRight();
          break;

        case "ArrowLeft":
          this.moveBlockLeft();
          break;
      }
      // draw();
      iteration();
    };

    const iteration = () => {
      setInterval(() => {
        this.checkDelete();
        this.fall();
        this.draw();
      }, 500);
    };
  }
}

class ShapeA {
  constructor(initialRotation, posX, posY) {
    this.data = [0, 0, 0, 0];
    this.data[0] = [0, 0, 0, 0];
    this.data[1] = [0, 0, 0, 0];
    this.data[2] = [0, 0, 0, 0];
    this.data[3] = [1, 1, 1, 1];
  }
}

class ShapeB {
  constructor(initialRotation, posX, posY) {
    this.data = [0, 0, 0, 0];
    this.data[0] = [0, 0, 0, 0];
    this.data[1] = [0, 0, 0, 0];
    this.data[2] = [1, 0, 0, 0];
    this.data[3] = [1, 1, 1, 1];
  }
}

class ShapeC {
  constructor(initialRotation, posX, posY) {
    this.data = [0, 0, 0, 0];
    this.data[0] = [0, 0, 0, 0];
    this.data[1] = [0, 0, 0, 0];
    this.data[2] = [0, 0, 0, 1];
    this.data[3] = [1, 1, 1, 1];
  }
}

class ShapeD {
  constructor(initialRotation, posX, posY) {
    this.data = [0, 0, 0, 0];
    this.data[0] = [0, 0, 0, 0];
    this.data[1] = [0, 0, 0, 0];
    this.data[2] = [1, 1, 0, 0];
    this.data[3] = [1, 1, 0, 0];
  }
}

class ShapeE {
  constructor(initialRotation, posX, posY) {
    this.data = [0, 0, 0, 0];
    this.data[0] = [0, 0, 0, 0];
    this.data[1] = [0, 0, 0, 0];
    this.data[2] = [0, 1, 1, 0];
    this.data[3] = [1, 1, 0, 0];
  }
}

class ShapeF {
  constructor(initialRotation, posX, posY) {
    this.data = [0, 0, 0, 0];
    this.data[0] = [0, 0, 0, 0];
    this.data[1] = [0, 0, 0, 0];
    this.data[2] = [0, 1, 0, 0];
    this.data[3] = [1, 1, 1, 0];
  }
}

class ShapeG {
  constructor(initialRotation, posX, posY) {
    this.data = [0, 0, 0, 0];
    this.data[0] = [0, 0, 0, 0];
    this.data[1] = [0, 0, 0, 0];
    this.data[2] = [1, 1, 0, 0];
    this.data[3] = [0, 1, 1, 0];
  }
}

class Shape {
  constructor() {
    this.whichShape = 0;
    this.initialRotation = 0;
    this.initialPosX = 0;
    this.initialPosY = 0;
  }
  shape = "";

  createShape(whichShape) {
    if (whichShape === 0) {
      this.shape = new ShapeA(
        this.initialRotation,
        this.initialPosX,
        this.initialPosY
      );
      console.log(this.shape);
    } else if (whichShape === 1) {
      this.shape = new ShapeB(
        this.initialRotation,
        this.initialPosX,
        this.initialPosY
      );
    } else if (whichShape === 2) {
      this.shape = new ShapeC(
        this.initialRotation,
        this.initialPosX,
        this.initialPosY
      );
    } else if (whichShape === 3) {
      this.shape = new ShapeD(
        this.initialRotation,
        this.initialPosX,
        this.initialPosY
      );
    } else if (whichShape === 4) {
      this.shape = new ShapeE(
        this.initialRotation,
        this.initialPosX,
        this.initialPosY
      );
    } else if (whichShape === 5) {
      this.shape = new ShapeF(
        this.initialRotation,
        this.initialPosX,
        this.initialPosY
      );
    } else if (whichShape === 6) {
      this.shape = new ShapeG(
        this.initialRotation,
        this.initialPosX,
        this.initialPosY
      );
    }
  }

  // rotateShape(toPosition = 0) {
  //   this.shape.rotateShape(toPosition);
  // }

  // moveShape(x, y) { }
}

let game = "";
let shape = "";

function startGame() {
  game = new Game();
  shape = new Shape();
  shape.createShape(0);
}
