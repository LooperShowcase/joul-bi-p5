function setup() {
  // The size of our starting canvas: 400px width, 400px height
  createCanvas(600, 600);
  angleMode(DEGREES)
}

function draw() {


  let seconds = second()
  let minutes = minute()
  let hours = hour()
  // The same as doing: background(220); or --> background(220,220,220);
  background(165, 165, 141);
  translate(width/2,height/2)
  fill(6, 90, 96)

  
  let d = day();
  strokeWeight(1)
  text("day:" + d, -55, 55);



  strokeWeight(8)
  stroke(6, 90, 96)
  ellipse(0,0,30,30,0,360)
  noFill()
  stroke(3, 7, 30)
  ellipse(0,0,330,330,0,360)

  strokeWeight(2)
  textSize(20)
  
  stroke(62, 31, 71)
  text("12",0,-180)

  stroke(62, 31, 71)
  text("3",180,0)

  stroke(62, 31, 71)
  text("6",0,190)

  stroke(62, 31, 71)
  text("9",-190,0)

  noFill()
  stroke(255)
  // text(hours + ":" + minutes + ":" + seconds,125,210);
  
  
  rotate(-90)
  strokeWeight(8)

  stroke(2, 62, 125)
  let secARC = map(seconds,0,60,0,360);
  arc(0,0,300,300,0,secARC)

  stroke(0, 24, 69)
  let minARC = map(minutes,0,60,0,360)
  arc(0,0,280,280,0,minARC)
  
  stroke(70, 143, 175)
  let hARC = map(hours % 12,0,12,0,360)
  arc(0,0,260,260,0,hARC)

  
  push()
  rotate(secARC)
  stroke(52, 58, 64)
  line(0,0,150,0)
  pop()
  
  
  push()
  rotate(minARC)
  stroke(52, 58, 64)
  line(0,0,140,0)
  pop()
  
  
  push()
  rotate(hARC)
  stroke(52, 58, 64)
  line(0,0,130,0)
  pop()
  rotate(90)
  {
    fill("black")
    stroke("black")
    strokeWeight(3)
    text("Joul's",-20,-300)

  }
  


}
