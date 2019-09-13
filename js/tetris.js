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
  constructor(
    whichShape = 0,
    initialRotation = 0,
    initialPosX = 0,
    initialPosY = 0
  ) {
    this.shape = "";

    if (whichShape === 0) {
      this.shape = new ShapeA(initialRotation, initialPosX, initialPosY);
      console.log(this.shape);
    } else if (whichShape === 1) {
      this.shape = new ShapeB(initialRotation, initialPosX, initialPosY);
    } else if (whichShape === 2) {
      this.shape = new ShapeC(initialRotation, initialPosX, initialPosY);
    } else if (whichShape === 3) {
      this.shape = new ShapeD(initialRotation, initialPosX, initialPosY);
    } else if (whichShape === 4) {
      this.shape = new ShapeE(initialRotation, initialPosX, initialPosY);
    } else if (whichShape === 5) {
      this.shape = new ShapeF(initialRotation, initialPosX, initialPosY);
    } else if (whichShape === 6) {
      this.shape = new ShapeG(initialRotation, initialPosX, initialPosY);
    }
  }

  rotateShape(toPosition = 0) {
    this.shape.rotateShape(toPosition);
  }

  moveShape(x, y) {}
}

class PlayArea {
  constructor() {
    this.shapes = [""];

    this.data = [
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

    drawPlayArea();
    createRandomShape;
  }

  createRandomShape() {
    this.shapes[0] = new Shape(0, 0, 0, 5);
    this.shapes[1] = new Shape(0, 0, 0, 5);
    this.shapes[0] = new Shape(0, 0, 0, 5);
  }

  drawShape(x, y) {
    this.shapes[0].data = new Shape(0, 0, 0, 5);

    var aShape = this.shapes[0];

    for (var i = 0; i < aShape.data[0].length; i++) {
      for (var j = 0; j < aShape.data[i].length; j++) {
        if (aShape.data[i][j] === 1) {
          this.data[i + initialPosX][j + initialPosY] = aShape.data[i][j];
          //transfer to playerarea
        }
      }
    }
  }
}

class Game {
  constructor() {
    PlayArea = new PlayArea();
  }
}
