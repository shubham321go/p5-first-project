function preload()
{

}

function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(150,150);
    video = createCapture(VIDEO);
    video.hide()
}
function draw()
{
    image(video, 230, 150, 220, 200);
    fill(255,0,0);
    stroke(255,0 , 0);
    circle(100, 100, 80);
    circle(100, 400, 80);
    circle(550, 400, 80);
    circle(550, 100, 80);
    fill(0,128, 0);
    stroke(0,128 , 0);
    rect(130,90,400,20);
    rect(85,90,20,300);
    rect(130,400,400,20);
    rect(550,90,20,300);
}

function take_snapshot()
{
    save('image.png');

}