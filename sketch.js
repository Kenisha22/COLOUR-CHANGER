var canvas;
var block1,block2,block3,block4,block5,block6;
var ball, edges;


function preload(){
    // load sound here
}


function setup(){
    canvas = createCanvas(800,600);
    

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";

//create two more blocks i.e. block3 and block4 here

    block3 = createSprite(510,580,200,30);
    block3.shapeColor = "pink";

    block4 = createSprite(725,580,200,30);
    block4.shapeColor = "green";

    block5 = createSprite(10,250,30,200);
    block5.shapeColor = "yellow";

    block6 = createSprite(785,250,30,200);
    block6.shapeColor = "red";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    //write code to add velocityX and velocityY
      ball.velocityX=-3
      ball.velocityY=2
}

function draw() {
    background(0);
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
       
    }



    if(block2.isTouching(ball) && ball.bounceOff(block2)){
        ball.shapeColor = "orange";
        //write code to set velocityX and velocityY of ball as 0

        
    }

    //write code to bounce off ball from the block3
    
    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "pink";
      
    }

    //write code to bounce off ball from the block4

    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "green";
      
    }

    if(block5.isTouching(ball) && ball.bounceOff(block5)){
        ball.shapeColor = "yellow";
      
    }

    if(block6.isTouching(ball) && ball.bounceOff(block6)){
        ball.shapeColor = "red";
      
    }


    drawSprites();
}
