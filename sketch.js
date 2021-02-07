var bullet;
var wall;
var speed;
var weight;
var thickness;
var bulletRightEgde;
var wallLeftEdge;

function setup() {
  createCanvas(1280,400);

  speed=random(23,200);
  weight=random(30,50);
  thickness=random(22,83)

  bullet=createSprite(50,200,50,5);
  bullet.velocityX=speed;
  bullet.shapeColor=color("white");

  wall=createSprite(1220,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);

  
}

function draw() {
  background("black"); 
  
  

     if(hasCollieded(bullet,wall)){
       bullet.velocityX=0;
       var damage=0.5 *weight*speed*speed/(thickness*thickness*thickness)
     }

     if(damage>10){
       wall.shapeColor=color(255,0,0);
     }

     if(damage<10){
       wall.shapeColor=color(0,225,0);
     }

  

  drawSprites();
}

function hasCollieded(bullet,wall){
      bulletRightEgde=bullet.x +bullet.width;
      wallLeftEdge=wall.x;

      if(bulletRightEgde>=wallLeftEdge){
          return true;
      }

      return false;

}