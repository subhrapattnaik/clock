var h,min,sec;


function setup() {
  createCanvas(800,400);

  createSprite(400, 200, 50, 50);
}

function draw() {
  background(0); 
  translate(200,200);
angleMode(DEGREES);
rotate(-90);
 h = hour();
 console.log(h);

 min = minute();
 console.log(min);

 sec = second();
 console.log(sec);
 
 secAngle = map(sec,0,60,0,360);
 minAngle = map (min,0,60,0,360);
 hAngle = map(h,0,12,0,360);
push();
 rotate(secAngle);
  strokeWeight(4);
stroke("red");
line(0,0,100,0);
 pop();

 push();
 rotate(minAngle);
strokeWeight(6);
stroke("green");
line(0,0,80,0);
 pop();

 push();
rotate(hAngle);
strokeWeight(8);
stroke("blue");
line(0,0,40,0);
 pop();

strokeWeight(10);
stroke("red");
noFill();
arc(0,0,350,350,0,secAngle);
stroke("green");
arc(0,0,300,300,0,minAngle);
stroke("blue");
arc(0,0,250,250,0,hAngle);

  drawSprites();
}