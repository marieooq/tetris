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

  setInterval(() => {
    fall();
    draw();
  }, 500);
};
