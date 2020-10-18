var hr, min, sc;
var scAngle, mnAngle, hrAngle;

function setup() {
  createCanvas(400,400);
  


angleMode(DEGREES);

}

function draw() {

hr = hour();
mn = minute();
sc = second();

  background(60);  
  drawSprites();
  textSize(25);
  fill('white');
  text(hr%12 + ':' + mn + ':' + sc, 150, 40)
  

translate(200, 200);
frameRate(1);  
rotate(-90)

  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr%12, 0, 12, 0, 360);
  
  
  push();
  rotate(scAngle);
  stroke(70, 200, 210);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(mnAngle);
  stroke(223, 207, 181);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(hrAngle);
  stroke(255, 177, 136);
  strokeWeight(7);
  line(0,0,100,0);
  pop();


  push();
  strokeWeight(6);
  noFill();
  stroke(255, 177, 136);
  arc(0, 0, 280, 280, 0, hrAngle);
  stroke(223, 207, 181);
  arc(0, 0, 260, 260, 0, mnAngle);
  stroke(70, 200, 210);
  arc(0, 0, 240, 240, 0, scAngle);
  
  pop();
}