const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var block1,block2,block3,block4,block5,block6,block7,block8,block9;
var score;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(300,265, 200, 20);

    block1 = new block(330,235,30,40);
    block2 = new block(360,235,30,40);
    block3 = new block(390,235,30,40);
    block4 = new block(420,235,30,40);
    block5 = new block(450,235,30,40);

    block6 = new block(360,195,30,40);
    block7 = new block(390,195,30,40);
    block8 = new block(420,195,30,40);

    block9 = new block(390,155,30,40);

    polygon = Bodies.circle(50,200,20);
    World.add(world.polygon);

    slingShot = new SlingShot(this.polygon,{x:100,y:200});
    
    score(0);
    text("SCORE : "+score,750,40);

    imageMode(CENTER)
    image(polygon_img,polygon.position.x,polygon.position.y,40,40);
}

function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(block.body, {x: mouseX , y: mouseY});
    }
}

function keyPressed(){
    if(keyCode === 32 ){
        bodyA.attach(this.polygon);
    }
}