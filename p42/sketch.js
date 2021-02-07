var hr,mn,sc;

var hr_Angle, mn_Angle, sc_Angle;

function setup() { 
  createCanvas(400,400); 
  
  } 
  
  function draw() { 
    background(0,0,0); 
    translate(200,200);
    rotate(-90);

    hr=hour();
    mn=minute();
    sc=second();

    sc_Angle = map(sc, 0, 60, 0, 360);
    mn_Angle = map(mn, 0, 60, 0, 360);
    hr_Angle = map(hr%12, 0, 12, 0, 360);

    push ()
    rotate(sc_Angle);
    strokeWeight(7);
    stroke(255,0,0);
    line(0,0,100,0);
    pop();

    push ()
    rotate(mn_Angle);
    strokeWeight(7);
    stroke(0,255,0);
    line(0,0,75,0);
    pop();

    push ()
    rotate(hr_Angle);
    strokeWeight(7);
    stroke(0,0,255);
    line(0,0,50,0);
    pop();

    stroke(255,0,255);
    point(0,0);
    strokeWeight(10);
    noFill();
    stroke(255,0,0);
    arc(0,0,300,300,0,sc_Angle);
    stroke(0,255,0);
    arc(0,0,280,280,0,mn_Angle);
    stroke(0,0,255);
    arc(0,0,260,260,0,hr_Angle);
  }

    