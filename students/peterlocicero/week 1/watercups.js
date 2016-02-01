var cups = [];
var time;
var currentTime;

function setup() {
  createCanvas(1000, 600);
  for (var i = 0; i < 2; i++){
//  cups[i] = new Cup(200,400);
  cups[i] = new Cup(400,400);
//  cups[i] = new Cup(600,400);
}
}
function draw() {
  background(255);
  //rect(200,400,100,100);
  for (var i = 0; i < cups.length; i++){
  cups[i].display();
  cups[i].water();
  }
}
function Cup(x,y){
  this.x = x;
  this.y = y;
  this.w = -10;
  //this.d = 100;

  this.display=function(){
    fill(135,206,250);
    rect(this.x,this.y,200,600);
  }
  this.water = function(){
    fill(0,0,255);
    rect(this.x,this.y+200,200,this.w);
  if (this.w > -200){ //makes it so the cups can't get filled past certain point
    var x =  round(random(1,3));
    switch (x){                        //switch for more "pour" like affect into glass
      case 1: this.w = this.w -.5;
      break;
      case 2: this.w = this.w +.5;
      break;
      case 3: this.w = this.w - 1;
      break;
    }

    }
    if (this.w <= -200){
      this.w = 0;
    }
  }
}
