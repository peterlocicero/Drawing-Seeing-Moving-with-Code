// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 1-1: stroke and fill
var uno = 0, dos = 0, thres = 0;
function setup() {
  createCanvas(1000, 600);
}

function draw() {
  background(255);
  fill(100,100,100);
chaos();
order();
rect(350 + uno,200,70,70);
rect(450 + uno,200 + dos,70,70);
rect(550 + uno,200,70+thres,70);

}
function chaos(){
  if ((mouseX < 300) && (uno > -300)){
    uno = uno -1;
  }
 if (mouseX < 200) {
    dos = dos - 1;
  }
  if (mouseX < 100) {
     thres = thres - 1;
   }
 }
function order(){
  if ((mouseX > 700) && (uno != 0)){
    uno = uno +1;
  }
  if ((mouseX > 600) && (dos != 0)){
    dos = dos +1;
  }
  if ((mouseX > 500) && (thres != 0)){
    thres = thres +1;
  }
}
