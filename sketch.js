function setup() {
  createCanvas(400,400)
  angleMode(DEGREES);
}

function draw() {
  background(255,255,255);
  translate(200,200);
  rotate(-90);
  
  hr = hour();
  sc = second();
  mn = minute();

  strokeWeight(7);
  
  var scAngle = map(sc,0,60,0,360);
  stroke(250,0,0);
  arc(0,0,300,300,0,scAngle);
  var mnAngle = map(mn,0,60,0,360);
  stroke(0,250,0);
  arc(0,0,250,250,0,mnAngle);
  var hrAngle = map(hr%12,0,12,0,360);
  stroke(0,0,250);
  arc(0,0,200,200,0,hrAngle);
}