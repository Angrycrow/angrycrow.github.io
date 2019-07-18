// home 
// the landing page of this site, not sure what to do with it yet 
let plainFont; 


function preload()
{
    plainFont = loadFont( 'resources/Anonymous Pro.ttf' ); 
}


function setup()
{
    // drawing space 
    createCanvas(windowWidth,windowHeight); 
    
    // font configuration
    fill('#556B2F');
    textFont(plainFont)
    textSize(50);
    text("Ben Nix-Bradley", windowWidth/2, windowHeight/2); 


}

function draw()
{
    noFill();
    stroke(1);
    ellipse(mouseX, mouseY, 80, 80);
}