var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particle =null;
var plinkos = [];
var divisions = [];
var turn=0;
var gameState="play"

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 65; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 40; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 65; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 40; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  Engine.update(engine);
  text("200",345,550)
  text("200",425,550)
  text("500",25,550)
  text("500",735,550)
  text("300",265,550)
  text("300",505,550)
  text("100",185,550)
  text("100",585,550)
  text("400",105,550)
  text("400",665,550)
  
  if(particle!==null){
    particle.display();
    if(particle.body.position.y>600){
    if(particle.body.position.x>10&&particle.body.position.x<80&&particle.body.speed<0.3){
      score=score+500;
      particle =null;
    }
    if(particle.body.position.x>80&&particle.body.position.x<160&&particle.body.speed<0.3){
      score=score+400;
      particle =null;
    }else if(particle.body.position.x>160&&particle.body.position.x<240&&particle.body.speed<0.3){
      score=score+100;
      particle =null;
    }else if(particle.body.position.x>240&&particle.body.position.x<320&&particle.body.speed<0.3){
      score=score+300;
      particle =null;
    }else if(particle.body.position.x>320&&particle.body.position.x<400&&particle.body.speed<0.3){
      score=score+200;
      particle =null;
    }else if(particle.body.position.x>400&&particle.body.position.x<480&&particle.body.speed<0.3){
      score=score+200;
      particle =null;
    }else if(particle.body.position.x>480&&particle.body.position.x<560&&particle.body.speed<0.3){
      score=score+300;
      particle =null;
    }else if(particle.body.position.x>560&&particle.body.position.x<640&&particle.body.speed<0.3){
      score=score+100;
      particle =null;
    }else if(particle.body.position.x>640&&particle.body.position.x<720&&particle.body.speed<0.3){
      score=score+400;
      particle =null;
    }else if(particle.body.position.x>720&&particle.body.position.x<800&&particle.body.speed<0.3){
      score=score+500;
      particle =null;
    }

   }
  }
  if(turn===5){
    gameState="end"
    fill("orange")
    textSize(95)
    text("Game Over",150,250)
    
  }
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
 
  
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}
function mousePressed(){
  if(gameState!=="end"){
      particle=new Particle(mouseX, 10, 10,10);
       turn++;
  }
}