let video;
let button;

let x = 0;

function setup() {
  canvas = createCanvas(1280, 240);
  canvas.position(10, 150);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(320, 240);
  video.position(10, 400);
  // video.hide();
  background(51);
  button = createButton('reset');
  button.position(10, 115);
  button.mousePressed(reset);
  back = createA('index.html', 'Back');
  back.position(25, 45);
}

  function reset() {
  let w = video.width;
  let h = video.height;
  copy(video, 2, 0, 1, h, x, 0, 1, h);
  x = 0;
}

function draw() {
  video.loadPixels();
  let w = video.width;
  let h = video.height;
  copy(video, w/2, 0, 1, h, x, 0, 1, h);
  x = x + 1;
  if (x > width) {
    x = 0;
  }
}
