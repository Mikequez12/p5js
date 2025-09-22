function setup() {
  createCanvas(400, 400);
}

function draw() {
  textFont('serif')
  clear()
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
    noStroke()
    if (i==floor((h%12)-1)) {
      fill(color('#f00f'))
    } else {
      fill(color('#ffff'))
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
    fill(color('white'))
    d = max(0,3-abs(i-m))**2*2
    if (i==floor(m)) {
      fill(color('red'))
    }
    let circularDist = min(abs(i - m), 60 - abs(i - m))
    let sizeFactor = (sqrt(max(0, 12 - circularDist))/1)**2
    textSize(sizeFactor)
    if (sizeFactor>0) {
      text(
        i+1,
        (width/11*(4.3))*sin(radians(i/12/5*360))+width/2,
        (height/11*(-4.3))*cos(radians(i/12/5*360))+height/2
      )
    }
    if (i%5==0) {
      continue
    }
    stroke(color('gray'));
    point(
      width/11*(-5)*sin(radians(i/12/5*360))+width/2,
      height/11*5*cos(radians(i/12/5*360))+height/2
    )
  }
  for (i=0;i<5*12;i++) {
    noStroke()
    drawingContext.shadowBlur = 0;
    fill(color('#fffa'))
    d = max(0,3-abs(i-s))**2*2
    if (i==floor(s)) {
      fill(color('#f00a'))
    }
    let circularDist = min(abs(i - s), 60 - abs(i - s))
    let sizeFactor = (sqrt(max(0, 12 - circularDist))/1)**2/1.2
    textSize(sizeFactor)
    if (sizeFactor>0) {
      text(
        i+1,
        (width/11*(3.8))*sin(radians(i/12/5*360))+width/2,
        (height/11*(-3.8))*cos(radians(i/12/5*360))+height/2
      )
    }
    if (i%5==0) {
      continue
    }
    stroke(color('gray'));
    point(
      width/11*(-5)*sin(radians(i/12/5*360))+width/2,
      height/11*5*cos(radians(i/12/5*360))+height/2
    )
  }
}
