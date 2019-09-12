//check if there is a block that can be moved
let moveFlag = 0;

let resetFlag = 0;

let array = [
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

//show current position of the blocks
let move = [
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

const draw = () => {
  let trs = document.querySelectorAll("tr");

  for (let i = 0; i < trs.length; i++) {
    let trNum = trs[i];
    for (let j = 0; j < trNum.children.length; j++) {
      trNum.children[j].classList.remove("stick");

      switch (array[i][j]) {
        case 1:
          trNum.children[j].classList.add("stick");
          break;
        default:
          trNum.children[j].classList.add("default");
      }
    }
  }

  const fall = () => {
    //an array that checks if there is a block under
    let under = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

    for (let i = 19; i >= 0; i--) {
      for (let j = 0; j < 10; j++) {
        if (resetFlag == 1) {
          return false;
        } else if (under[j] == 0) {
          if (array[i][j] == 0) {
            //neither there are anything under this array nor it's a block
            under[j] = 0;
          } else {
            //there is nothing under this array and it's a block
            array[i + 1][j] = array[i][j];
            array[i][j] = 0;

            //modify the move array
            if (move[i][j] == 1) {
              move[i][j] = 0;
              move[i + 1][j] = 1;
            }
            under[j] = 0;
          }
        } else {
          if (array[i][j] == 0) {
            //A block is under this array and itself is NOT a block
            under[j] = 0;
          } else {
            //A block is under this array and itself is a block
            if (move[i][j] == 1) {
              console.log(`i:${i}`);
              console.log(`j:${j}`);
              console.log("array");
              console.log(array);
              console.log("move");
              console.log(move);
              resetMove();
              console.log("move after resetMove was excuted");
              console.log(move);

              resetFlag = 1;
            }
            under[j] = 1;
          }
        }
      }
    }
  };

  const resetMove = () => {
    moveFlag = 0;
    for (let i = 0; i < 20; i++) {
      for (let j = 0; j < 10; j++) {
        move[i][j] = 0;
      }
    }
  };

  const genBlock = blockNum => {
    if (moveFlag == 0) {
      switch (blockNum) {
        case 1:
          array[0][5] = 1;
          array[1][5] = 1;
          array[2][5] = 1;
          array[3][5] = 1;

          //modifiy the move array
          move[0][5] = 1;
          move[1][5] = 1;
          move[2][5] = 1;
          move[3][5] = 1;

          break;

        case 2:
          array[0][1] = 1;
          array[0][2] = 1;
          array[1][0] = 1;
          array[1][1] = 1;

          //modifiy the move array
          move[0][1] = 1;
          move[0][2] = 1;
          move[1][0] = 1;
          move[1][1] = 1;

          break;
      }
      moveFlag = 1;
    }
  };

  const moveBlockRight = () => {
    for (let i = 19; i >= 0; i--) {
      let newMove = move[i].concat();
      for (let j = 8; j >= 0; j--) {
        if (move[i][j] == 1) {
          array[i][j + 1] = array[i][j];
          array[i][j] = 0;
          newMove[j + 1] = 1;
          newMove[j] = 0;
        }
      }
      move[i] = newMove;
    }
  };

  const moveBlockLeft = () => {
    for (let i = 19; i >= 0; i--) {
      let newMove = move[i].concat();
      for (let j = 1; j < 10; j++) {
        if (move[i][j] == 1) {
          array[i][j - 1] = array[i][j];
          array[i][j] = 0;
          newMove[j - 1] = 1;
          newMove[j] = 0;
        }
      }
      move[i] = newMove;
    }
  };

  const checkDelete = () => {
    for (let i = 19; i >= 0; i--) {
      if (!array[i].includes(0)) {
        for (let j = 0; j < 10; j++) {
          array[i][j] = 0;
        }
      }
    }
    moveFlag = 0;
  };

  document.onkeydown = e => {
    switch (e.code) {
      case "Space":
        resetFlag = 0;
        genBlock(2);
        break;

      case "ArrowRight":
        moveBlockRight();
        break;

      case "ArrowLeft":
        moveBlockLeft();
        break;
    }
    // draw();
    iteration();
  };

  const iteration = () => {
    setInterval(() => {
      checkDelete();
      fall();
      draw();
    }, 500);
  };
};
