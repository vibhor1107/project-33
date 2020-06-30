var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particle ;
var plinkos = [];
var divisions=[];

var divisionHeight=300;
var turn =0;
var score=0;
var END;
var  PLAY;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  

  
  ground = new Ground(width/2,height,width,20);

  gameState=PLAY;

   for (var k = 0; k <=width; k = k + 80) {
   divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
}


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");


  Engine.update(engine);
 if (gameState===PLAY){
 stroke("red")
 textSize(15)
  text("Score:"+score,20,20)
  ground.display();
 // particle.display();

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  // if(frameCount%60===0){
   //  particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
   //
  // }
 
 // for (var j = 0; j < 10; j++) {
   
   //  particles[j].display();
  // }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(particle=null){
    particle.display();
  
  if (particle.x<300){
    score=score+500
    particle=null;
    if (turn>=5){
      gameState=END
    }
  }}
   if (particle.x>300 && particle.x>600)
   {
     score=score+100

   }
   if (particle.x<601&&particle.x>900){
     score=score+200
   }
   

   if (turn>=5){
     gameState=END
   }}

   if (gameState===END){
     stroke("red")
     textSize(100)
     text("Game Over",200,200)
    
   }

  }
  
function mousePressed(){
  turn++
  console.log(turn)
  console.log(score)
   particle=new Particle(mouseX,10,10,10)

}