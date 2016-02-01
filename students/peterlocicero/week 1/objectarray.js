var circles = [];

function setup() {
  createCanvas(1000, 600);
  for (var i = 0; i < 100; i++){
  circles[i] = new Circle(random(0,600),random(0,600),139,69,19);
  }
}
function mousePressed(){
circles.push(new Circle(mouseX,mouseY,128,0,0));
}

function draw() {
  background(255);
  for (var i = 0; i < circles.length; i++){
  circles[i].display();
  circles[i].wobble();
  }
}

function Circle(x,y,r,g,b){
  this.x = x;
  this.y = y;
  this.d = 100;
  this.d2 = 50;
  this.c1 = r;
  this.c2=g;
  this.c3 = b;

  this.display = function() {
    fill(255);
    ellipse(this.x, this.y, this.d, this.d/1.5);
    fill(this.c1,this.c2,this.c3);
    ellipse(this.x,this.y,this.d2,this.d2);
    fill(0);
    ellipse(this.x,this.y,this.d2/2,this.d2/2);
  }
  this.wobble = function(){
    this.x = this.x + random(-3,3);
    this.y = this.y + random(-3,3);
  }

}
