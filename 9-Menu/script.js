////////////////////////////////////////////
//   You can try modifying these params   //
////////////////////////////////////////////

var cx = 300; // center x
var cy = 300; // center y
var r = 240; // radius
var wn = 24; // number of waves
var wa = 24 * 6; // number of active waves
var wh = 240; // max height of a wave
var duration = 12; // duration of one cycle in seconds
var curviness = 1.5; // kurvatura :)

////////////////////////////////////////////



function segmentToString(x, y) {
  return [x.b.toFixed(2), y.b.toFixed(2), x.c.toFixed(2), y.c.toFixed(2), x.d.toFixed(2), y.d.toFixed(2)].join(",");
}

function arrayRotate(arr, count) {
  count -= arr.length * Math.floor(count / arr.length);
  arr.push.apply(arr, arr.splice(0, count));
  return arr;
}

function getCurve(phase, inverse) {
  inverse = inverse ? -1 : 1;

  var step = 1 / Math.ceil(wa / 2);
  var steps = new Array(wn).fill(0);

  for (let i = 0, diff = 0; i < Math.ceil(wa / 2); i++) {
    diff += step;
    steps[i] = Sine.easeInOut.getRatio(diff) * wh;
  }

  for (let i = wa - 1, diff = 0; i > Math.ceil(wa / 2) - 1; i--) {
    diff += step;
    steps[i] = Sine.easeInOut.getRatio(diff) * wh;
  }

  var steps = arrayRotate(steps, phase);

  var values = [];
  steps.forEach((step, i) => {
    var a = cx + (r + (i % 2 ? -step : step) * inverse) * Math.cos(2 * Math.PI * (i * 2) / (wn * 2));
    var b = cy + (r + (i % 2 ? -step : step) * inverse) * Math.sin(2 * Math.PI * (i * 2) / (wn * 2));
    var c = cx + r * Math.cos(2 * Math.PI * (i * 2 + 1) / (wn * 2));
    var d = cy + r * Math.sin(2 * Math.PI * (i * 2 + 1) / (wn * 2));

    values.push({ x: a, y: b }, { x: c, y: d });
  });
  values.push(values[0]);

  var data = BezierPlugin.bezierThrough(values, curviness);
  var d = "M" + data.x[0].a + "," + data.y[0].a + " C" + segmentToString(data.x[0], data.y[0]);
  for (var i = 1; i < data.x.length; i++) {
    d += "," + segmentToString(data.x[i], data.y[i]);
  }

  return d;
}



var svgNS = "http://www.w3.org/2000/svg";
var path1 = document.createElementNS(svgNS, "path");
var path2 = document.createElementNS(svgNS, "path");
TweenMax.set(path1, {
  attr: {
    "d": getCurve(0),
    // "stroke": "#f00",
    "id": "svg-preloader-wave-1" } });


TweenMax.set(path2, {
  attr: {
    "d": getCurve(0, true),
    // "stroke": "#fff",
    "id": "svg-preloader-wave-2" } });


document.getElementById("mySVG").appendChild(path1);
document.getElementById("mySVG").appendChild(path2);



var phase = 0;
var timeline = new TimelineMax({
  repeat: -1 });

for (var i = 0; i < wn; i++) {
  phase--;

  timeline.to("#svg-preloader-wave-1", duration / wn, {
    attr: { d: getCurve(phase) },
    ease: Power0.easeNone });


  timeline.to("#svg-preloader-wave-2", duration / wn, {
    attr: { d: getCurve(phase, true) },
    ease: Power0.easeNone },
  "-=" + duration / wn);
}