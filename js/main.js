let array = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
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
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
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
        if (under[j] == 0) {
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
            under[j] = 1;
          }
        }
      }
    }
  };

  const genBlock = blockNum => {
    switch (blockNum) {
      case 1:
        array[0][5] = blockNum;
        array[1][5] = blockNum;
        array[2][5] = blockNum;
        array[3][5] = blockNum;

        //modifiy the move array
        move[0][5] = 1;
        move[1][5] = 1;
        move[2][5] = 1;
        move[3][5] = 1;

        break;
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

  document.onkeydown = e => {
    switch (e.code) {
      case "Space":
        genBlock(1);
        break;

      case "ArrowRight":
        moveBlockRight();
        break;

      case "ArrowLeft":
        moveBlockLeft();
        break;
    }
    draw();
  };

  setInterval(() => {
    fall();
    draw();
  }, 500);
};
