var bullet,speed,weight
var wall,thickness

function setup() {
  createCanvas(1200,400);
  thickness=random(22,83)
  wall=createSprite(1000,200,thickness,height/2) 
bullet=createSprite(100,200,10,10)
  speed=random(223,321)
  weight=random(30,52)
  console.log(speed)
bullet.velocityX=speed
}

function draw() {
  background("yellow"); 
  console.log(speed) 
 if(hascollided(wall,bullet))
 {
bullet.velocityX=0
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
if(damage>10){ss
wall.shapeColor=color(255,0,0)
}
if(damage<10){
wall.shapeColor=color(0,255,0)
}

 }


 
drawSprites();
}
function hascollided(lbullet,lwall){

  bulletRightEdge=lbullet.x+lbullet.width
  wallLeftEdge=lwall.x
  if(bulletRightEdge>=wallLeftEdge){
return true


  }
return false


}
