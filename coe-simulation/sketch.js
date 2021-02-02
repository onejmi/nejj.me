
const framesPerSecond = 60;
const intialPosition = 2;

let initialVelocity = 7.96
let velocity = initialVelocity
let screenVelocity = 0;
let x = intialPosition;
let y = 0;

let mass = 18.2;
let mew = 0.112;
const g = 9.8;
let acceleration = (g * mew) / framesPerSecond;

let ke = 0
let initialKe = 0
let we = 0

let moving = false

let stoneRes;

let massSlider;
let velocitySlider;
let coeffSlider;
let playButton;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(framesPerSecond)
  smooth()

  const minSliderPos = windowHeight / (3/2);

  coeffSlider = createSlider(0.1, 0.2, mew, 0.01)
  coeffSlider.position(30, minSliderPos + 110)

  massSlider = createSlider(5, 30, mass)
  massSlider.position(30, minSliderPos + 10)

  velocitySlider = createSlider(5, 10, initialVelocity, .5)
  velocitySlider.position(30, minSliderPos + 60)

  playButton = createButton("Start")
  playButton.position(100, windowHeight - 75)
  
  playButton.mousePressed(() => { 
    velocity = initialVelocity
    x = intialPosition
    ke = (mass / 2) * (velocity * velocity)
    initialKe = ke
    moving = true 
    massSlider.attribute('disabled', true)
    velocitySlider.attribute('disabled', true)
    coeffSlider.attribute('disabled', true)
    acceleration = (g * coeffSlider.value()) / framesPerSecond;
  })

  stoneRes = loadImage('assets/stone.png')
}

function draw() {
  mass = massSlider.value()
  initialVelocity = velocitySlider.value()
  background(220);
  fill(0)
  text("Kinetic Energy: " + Math.round(ke) + "J", 33, 33);
  text("Thermal Energy: " + Math.round(we) + "J", 300, 33);
  text("Distance: " + Math.round(x - intialPosition) + "m", 600, 33);

  text("mass (" + mass + "kg)", massSlider.x, massSlider.y)
  text("velocity (" + initialVelocity + "m/s)", velocitySlider.x, velocitySlider.y)
  text("coeff. of friction (" + coeffSlider.value() + ")", coeffSlider.x, coeffSlider.y)

  let imageScale = 11 - (mass / 20)
  image(stoneRes, x * 25, 300 - (stoneRes.height / imageScale) - 1, stoneRes.width / imageScale, stoneRes.height / imageScale)
  noStroke()
  fill(255)
  rect(0, 300, windowWidth, 30)

  fill(0)
  if(x > 2) fill(40, 255, 40)
  text("0m", 60, 323)

  if(x > 10) {   
    fill(40, 255, 40)
  } else fill(0)
  textSize(20)
  text("10m", 11.5 * 25, 323)

  if(x > 20) {   
    fill(40, 255, 40)
  } else fill(0)
  textSize(20)
  text("20m", 21.5 * 25, 323)

  if(x > 30) {   
    fill(40, 255, 40)
  } else fill(0)
  textSize(20)
  text("30m", 31.5 * 25, 323)


  if(moving) {
    ke = (mass / 2) * (velocity * velocity)
    we = initialKe - ke
    screenVelocity = velocity / framesPerSecond;
    x += screenVelocity
    velocity -= acceleration
    velocity = Math.max(0, velocity) 
    if(velocity == 0) {
      moving = false
      setTimeout(() => {
        ke = 0
        we = 0
        massSlider.removeAttribute('disabled')
        velocitySlider.removeAttribute('disabled')
        coeffSlider.removeAttribute('disabled')
        x = intialPosition
      }, 1000)
    }
  }
}
