// import { particlesCursor } from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js'

// const pc = particlesCursor({
//     el: document.getElementById('app'),
//     gpgpuSize: 20,
//     colors: [0xffFFFF, 0xffFFFF ],
//     color: 0x00FFFF,
//     coordScale: 1,
//     noiseIntensity: 0.001,
//     noiseTimeCoef: 0.01,
//     pointSize: 2,
//     pointDecay: 0.0025,
//     sleepRadiusX: 5,
//     sleepRadiusY: 5,
//     sleepTimeCoefX: 0.001,
//     sleepTimeCoefY: 0.002
//   })




var blendAmount = 70;
var delay = -20;
var windowWidth = window.innerWidth;
var bg = document.getElementById("bg");

document.onmousemove = function(e){
	mouseX = Math.round(e.pageX / windowWidth * 100 - delay);
	
	col1 = mouseX - blendAmount;
	col2 = mouseX + blendAmount;
	
	bg.style.background = "linear-gradient(to right, #000000 "+ col1 +"%, #393939 "+ col2 +"%)";
}

 
  