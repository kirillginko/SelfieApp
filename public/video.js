// function setup() {
//   noCanvas();
//   const video = createCapture(VIDEO);
//   video.size(360, 320);
//   let lat, lon;
//   const button = document.getElementById('submit');
//   button.addEventListener('click', async event => {
//     const mood = document.getElementById('mood').value;
//     video.loadPixels();
//     const image64 = video.canvas.toDataURL();
//     const data = { lat, lon, mood, image64 };
//     const options = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     };
//     const response = await fetch('/api', options);
//     const json = await response.json();
//     console.log(json);
//   });

//   if ('geolocation' in navigator) {
//     console.log('geolocation available');
//     navigator.geolocation.getCurrentPosition(position => {
//       lat = position.coords.latitude;
//       lon = position.coords.longitude;
//       console.log(lat, lon);
//       document.getElementById('latitude').textContent = lat;
//       document.getElementById('longitude').textContent = lon;
//     });
//   } else {
//     console.log('geolocation not available');
//   }
// }
var video;
var slider

function setup() {
  canvas = createCanvas(640, 480, WEBGL);
  canvas.id('p5canvas');
  video = createCapture(VIDEO);
  video.size(640, 480);
  // video.hide();
  video.id('p5video');
  // slider = createSlider(0, 1, 0.5, 0.01);
  // slider.id('blur-slider')

  var seriously = new Seriously();

  var src = seriously.source('#p5video')
  var target = seriously.target('#p5canvas')

  // var blur = seriously.effect('blur');
  // blur.amount = '#blur-slider';
  // blur.source = src;
  // target.source = blur;
// <!-------------chroma------------------!>
  // var chroma = seriously.effect('chroma');
  // chroma.source = src;
  // target.source = chroma;
  // var r = 97 / 255;
  // var g = 81 / 255;
  // var b = 142 / 255;
  // chroma.screen = [r,g,b,1];

  var accumulator = seriously.effect('accumulator');
  accumulator.source = src;
  target.source = accumulator;


  seriously.go();
}
