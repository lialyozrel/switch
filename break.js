let x = 0;
let y = 0;
labelCancelLoops: while (true) {
  console.log('Outer loops: ' + x);
  x += 1;
  y = 1;
  while (true) {
    console.log('Inner loops: ' + y);
    y += 1;
    if (y === 10 && x === 10) {
      break labelCancelLoops;
    } else if (y === 10) {
      break;
    }
  }
}
