var starImg,bgImg;
var star, starBody;
var fairyImg , fairyVoice;
var fairy , fairySound;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//load animation for fairy here
	fairyImage = loadImage ("images/fairyImage1.png","images/fairyImage2.png");
	fairySound = loadSound("sound/JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
fairySound.play();
	//create fairy sprite and add animation for fairy
	fairy = createSprite(130,520);
    fairy.addAnimation("flyingfairy",fairyImage);
    fairy.scale = 0.25;







	
	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  if(star.y > 470 && startBody.position.y  > 470){
	  Matter.body.setStatic(starBody,true);
  }

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy

  drawSprites();

}

function keyPressed() {
 
	if(keyCode === RIGHT_ARROW){
		fairy.x = fairy.x + 20;
	}

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}
	

	//writw code to move fairy left and right
	
}
