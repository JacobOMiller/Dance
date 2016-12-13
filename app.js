function pointLeft() {
  console.log("point left");
  alert("Point left");
}
function pointRight() {
  console.log("point right");
  alert("point right");
}
function stepLeft(){
  console.log("step Left");
  alert("step left");
}
function stepRight(){
  console.log("step Right");
  alert("step right");
}

for (var i = 0; i < 2; i++) {
  pointLeft();
  pointRight();
}
for (var i = 0; i < 2; i++) {
  stepLeft();
  stepRight();
}
