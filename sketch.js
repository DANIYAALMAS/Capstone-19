var tI,t,dI,d,dG,cI,cG;
var g,ghostI,iB,iBG;
var gameState = "play"
function preload(){
tI=loadImage('tower.png')  
dI=loadImage('door.png')  
  cI=loadImage('climber.png')  
  ghostI=loadImage('ghost-standing.png')  
 

}




function setup(){
createCanvas(600,600)
  t=createSprite(300,300)
  t.addImage(tI)
  t.velocityY=1
  
g=createSprite(200,200,50,50) 
  g.addImage(ghostI)
g.scale=0.3  
  
  
  
    dG=new Group()
 cG=new Group() 
  iBG=new Group()
}




function draw(){
background(0)
  if (gameState === "play") {
        if(t.y>400){
          t.y=300
        }     
       if(keyDown("left_arrow")){
          g.x=g.x-3  
        }
      if(keyDown("right_arrow")){
      g.x=g.x+3  

        }
      if(keyDown("space")){
      g.y=g.y-5  
      } 
  
         g.y=g.y+2

        if(cG.isTouching(g)){
          g.velocityY=0;
        }

        if(iBG.isTouching(g) || g.y>600){
          g.destroy();
          gameState="end"
        }
  
         sDoors()
 
        drawSprites()  
  }
   
  if (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250)
  }
}
function sDoors(){
   if (frameCount % 240 === 0) {
     d= createSprite(200,-50);
   d.x=Math.round(random(120,400))
    d.addImage(dI);
     
     c= createSprite(200,10);
   c.x=d.x
    c.addImage(cI);
      iB=createSprite(200,15);
     iB.x=d.x
     iB.width=c.width
     iB.height=2;
     iB.debug=true
   
    d.velocityY = 1;
    c.velocityY = 1;
        iB.velocityY = 1;
      g.depth = d.depth;
    g.depth = d.depth + 1;
    
     //assign lifetime to the variable
    d.lifetime = 800;
   c.lifetime = 800;
   iB.lifetime = 800;  
    
    
  dG.add(d)
  cG.add(c)   
     iBG.add(iB)  
    }


}































