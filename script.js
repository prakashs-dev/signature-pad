const pad = document.getElementById("signature-pad");

function resizeCanvas() {
  let ratio = Math.max(window.devicePixelRatio || 1, 1);
  pad.width = pad.offsetWidth * ratio;
  pad.height = pad.offsetHeight * ratio;
  pad.getContext("2d").scale(ratio, ratio);
}
window.onresize = resizeCanvas;
resizeCanvas();

let signaturePen = new SignaturePad(pad, {
  backgroundColor: "rgb(250,250,250)",
});

document.getElementById("clear").addEventListener("click", function () {
  signaturePen.clear();
});
