function Dir(dir, step) {
  this.dir = dir;
  this.step = step;
}

const DIRENUM = {
  'neutral': 0,
  'right': 1,
  'left': 2,
  'up': 3,
  'down': 4
}

const blocksAway = function (directions) {
  let northEast = {
    north: 0,
    east: 0
  }

  let allDirs = [];

  for (let i = 0; i < directions.length; i += 2) {
    let d = new Dir(directions[i], directions[i + 1]);
    allDirs.push(d);
  }


  let currentDirection = 'neutral';

  for (var m of allDirs) {
    switch (currentDirection) {
      case 'neutral':

        currentDirection = m.dir;
        if (currentDirection === 'left') {
          currentDirection = 'up';
          northEast.north += m.step;
        } else if (currentDirection === 'right') {
          currentDirection = 'right';
          northEast.east += m.step;
        }
        break;

      case 'right':
        //go UP
        if (m.dir === 'left') {
          currentDirection = 'up';
          northEast.north += m.step;
        }
        //GO DOWN
        else if (m.dir === 'right') {
          currentDirection = 'down';
          northEast.north -= m.step;
        }

        break;
      //GOING LEFT
      case 'left':
        //GOING DOWN
        if (m.dir === 'left') {
          currentDirection = 'down';
          northEast.north -= m.step;
        }
        //GOING UP
        else if (m.dir === 'right') {
          currentDirection = 'up';
          northEast.north += m.step;
        }

        break;
      //going UP
      case 'up':
        //GOING RIGHT
        if (m.dir === 'left') {
          currentDirection = 'left';
          northEast.east -= m.step;
        }
        //GOING LEFT
        else if (m.dir === 'right') {
          currentDirection = 'right';
          northEast.east += m.step;
        }

        break;
      //going DOWN
      case 'down':
        //GOING RIGHT
        if (m.dir === 'left') {
          currentDirection = 'left';
          northEast.east -= m.step;
        }
        //GOING LEFT
        else if (m.dir === 'right') {
          currentDirection = 'right';
          northEast.east += m.step;
        }
        break;
    }
  }
  return ('east: ' + northEast.east + ',north: ' + northEast.north);
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));