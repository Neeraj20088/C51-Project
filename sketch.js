var player, playerImg;
var triangle, triangleImg;
var bullet, bulletImg;


function preload(){
    playerImg = loadImage("player.png");
    bulletImg = loadImage("bullet.png");
    triangleImg = loadImage("triangle.png");
    backgroundImg = loadImage("backgroundImg.webp");
}

function setup() {
    createCanvas(windowWidth,windowHeight);

    player = createSprite(200,550,50,50)
    player.addImage(playerImg)
    player.scale = 0.5

    bullet = createSprite(195,590,50,50)
    bullet.addImage(bulletImg)
    
    triangle = createSprite(200,200,50,50)
    triangle.addImage(triangleImg)
    triangle.scale = 0.3

    triangleG = new Group();
}

function draw() {
    background(backgroundImg);
    
    drawSprites();


    player.x = World.mouseX;
}