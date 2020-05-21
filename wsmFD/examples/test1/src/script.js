//OpenCV.js API ( Tutorials ) https://docs.opencv.org/4.2.0/d5/d10/tutorial_js_root.html  https://docs.opencv.org/4.2.0/d0/d84/tutorial_js_usage.html

let imgElement = document.getElementById('srcImage')
let inputElement = document.getElementById('fileInput');

inputElement.addEventListener("change", (e) => {
  imgElement.src = URL.createObjectURL(e.target.files[0]);
}, false);
imgElement.onload = function() {
  let mat = cv.imread(imgElement);
  cv.cvtColor(mat, mat, cv.COLOR_RGBA2GRAY);
  cv.imshow('outputCanvas', mat);
  mat.delete();
}

function opencvIsReady() {
  document.getElementById('status').innerHTML = 'OpenCV.js (WebAssembly) Esta Cargado.'
}