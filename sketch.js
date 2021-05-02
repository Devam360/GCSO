var c1, wall;

var speed, weight, def;

function setup() {
  createCanvas(1600,400);

  speed = random(55, 90);
  weight = random(400, 1500);

  c1=createSprite(50, 200, 50, 50);
  c1.velocityX = speed
  c1.shapeColor = color(0);

  wall = createSprite(1500, 200, 60, height/2)

  def = (0.5*weight*speed*speed)/22500

}

function draw() {
  background(255,255,255);
  if(c1.x < wall.x + wall.width &&
    c1.x + c1.width > wall.x &&
    c1.y < wall.y + wall.height &&
    c1.y + c1.height > wall.y){
      c1.velocityX = 0
      if(def<80){
        c1.shapeColor="green"
      }
      else if(def<180 && def>=80){
        c1.shapeColor = "yellow"
      }
      else{
        c1.shapeColor = "red"
      }
    }
  drawSprites();
}