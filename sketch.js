var car,wall; 
var speed,weight;


function setup() {
  createCanvas(1600,400);
  
  
  speed = random(55,90);
  weight = random(400,1600);

car  = createSprite(50,200,50,50);

car.shapeColor = "white"
car.velocityX = speed;

wall = createSprite(1000,200,60,height/2);

}

function draw() {
  background(0);  
 

if(wall.position.x - car.position.x < car.width/2 + wall.width/2){

 var deformation = 0.5*weight*speed*speed/22500
 car.velocityX = 0;

 if(deformation < 100){
   car.shapeColor = "green"
 }
 if(deformation > 100 && deformation < 180){
   car.shapeColor = "yellow"
 }
 if(deformation > 180){
   car.shapeColor = "red"
 }

}
drawSprites();
} 