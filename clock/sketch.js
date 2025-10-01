function setup() {
  createCanvas(400, 400);
}

function draw() {
  noFill()
  strokeWeight(1)
  stroke(color('white'))
  noFill()
  textFont('serif')
  clear()
  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = color('white');
  for (let i = 0; i < 12; i++) {
    beginShape();
    for (let j = 0; j < 10; j++) {
      if (j<2||j>8) continue;
      vertex(
        sin(radians(i/12*360+j/10*(360/12)))*width/2.2+width/2,
        cos(radians(i/12*360+j/10*(360/12)))*width/2.2+height/2
      )
    }
    endShape()
  }
  let now = new Date()
  let s = now.getSeconds()+now.getMilliseconds()/1000
  let m = now.getMinutes()+s/60
  let h = now.getHours()+m/60
  drawingContext.shadowBlur = 5;
  drawingContext.shadowColor = color('red');
  stroke(color('red'))
  strokeWeight(1)
  line(
    width/2,
    height/2,
    cos(radians(s/60*360-90))*width/5*1.4+width/2,
    sin(radians(s/60*360-90))*height/5*1.4+height/2
  )
  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = color('white');
  strokeWeight(2)
  stroke(color('white'))
  line(
    width/2,
    height/2,
    cos(radians(m/60*360-90))*width/3.2+width/2,
    sin(radians(m/60*360-90))*height/3.2+height/2
  )
  strokeWeight(3)
  line(
    width/2,
    height/2,
    cos(radians(h/12*360-90))*width/4.2+width/2,
    sin(radians(h/12*360-90))*height/4.2+height/2
  )
  drawingContext.shadowBlur = 0;
  textSize(20)
  textAlign(CENTER,CENTER)
  for (i=0;i<12;i++) {
    noStroke();
    fill(color('black'))
    drawingContext.shadowBlur = 10;
    drawingContext.shadowColor = color('white');
    if (i==floor((h-1)%12)) {
      fill(color('red'))
      drawingContext.shadowColor = color('red');
    } else {
      fill(color('white'))
    }
    text(
      ['I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII'][i],
      width/11*(-5)*sin(radians(180+(i-11)/12*360))+width/2,
      height/11*5*cos(radians(180+(i-11)/12*360))+height/2
    )
  }
  for (i=0;i<5*12;i++) {
    noStroke()
    drawingContext.shadowBlur = 0;
    d = max(0,3-abs(i-m))**2*2;
    let circularDist = min(abs(i - m), 60 - abs(i - m))
    let sizeFactor = (sqrt(max(0, 12 - circularDist))/1)**2*0.8
    fill(lerpColor(color('black'),color('white'),(1-(circularDist/10))**2))
    drawingContext.shadowBlur = 1;
    drawingContext.shadowColor = color('white');
    if (i==floor(m)) {
      fill(color('red'))
      drawingContext.shadowColor = color('red');
    }
    textSize(sizeFactor)
    if (sizeFactor>0) {
      text(
        i+1,
        (width/11*(4.3))*sin(radians(i/12/5*360))+width/2,
        (height/11*(-4.3))*cos(radians(i/12/5*360))+height/2
      )
    }
  }
  for (i=0;i<5*12;i++) {
    noStroke()
    drawingContext.shadowBlur = 0;
    let circularDist = min(abs(i - s), 60 - abs(i - s))
    let sizeFactor = (sqrt(max(0, 12 - circularDist))/1)**2*0.8
    fill(lerpColor(color('black'),color('white'),(1-(circularDist/10))**2))
    d = max(0,3-abs(i-s))**2*2
    drawingContext.shadowBlur = 1;
    drawingContext.shadowColor = color('white');
    if (i==round(s)) {
      fill(color('#f00'));
      drawingContext.shadowColor = color('red');
    }
    textSize(sizeFactor)
    if (sizeFactor>0) {
      text(
        (i+1)%60,
        (width/11*(3.8))*sin(radians((i-.5)/12/5*360))+width/2,
        (height/11*(-3.8))*cos(radians((i-.5)/12/5*360))+height/2
      )
    }
  }
}
