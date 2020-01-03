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
    text("Ben Nix-Bradley \n- Under Construction", 20, 20); 


}

function draw()
{
    
}