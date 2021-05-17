//Create variables here
var dog,happyDog;
var dogI, hDogI;
var database;
var foodS,foodStock;

function preload()
{
	//load images here
  dogI = loadImage("images/dogImg.png");
  hDogI= loadImage("images/dogImg1.png");

}

function setup() {
  database =firebase.database();

  createCanvas(500,500);

  dog = createSprite(400,300,10,10);
  dog.addImage(dogI);
  dog.scale=0.15
  
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);

}


function draw() {  
  background('lightgreen')

  if(keyDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(hDogI);
    dog.scale=0.15
}

  drawSprites();
  //add styles here
  text("Press UP_ARROW to feed the Dog",100,30)
  textSize(30)
  fill(255);
}

function readStock(data){
  foodS = data.val();

}

function writeStock(x){
   
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    Food:x
  })
}


