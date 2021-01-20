var car,bus;

function setup() {
  createCanvas(400,400);

  car=createSprite(200, 200, 80, 60);
  bus=createSprite(300,200,60,80);

  car.shapeColor="white";
  bus.shapeColor="white";

  car.debug=true;
  bus.debug=true;
  
}

function draw() {
  background("purple"); 
  
  bus.y=mouseY;
  bus.x=mouseX;

  touch();
  
  //text(bus.x,50,50);

  drawSprites();
}

function touch(){
  if(bus.x-car.x < bus.width/2+car.width/2 &&
    car.x-bus.x < bus.width/2+car.width/2 &&
    bus.y-car.y < bus.height/2+car.height/2 &&
    car.y-bus.y < bus.height/2+car.height/2 ){
    car.shapeColor="blue";
    bus.shapeColor="blue";
  }
  else{
    car.shapeColor="white";
    bus.shapeColor="white";
  }


}