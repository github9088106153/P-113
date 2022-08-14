function preload(){}
function setup(){
    canvas= createCanvas(500,400);
    canvas.position(70,200);
    video=createCapture(VIDEO);
    video.hide();
   
}
function draw(){
    image(video,50,50,400,300);
 
 fill(50, 168, 82);
 rect(0,27,575, 25);
 rect(0,347,575, 25);
 rect(25,0,25, 400);
 rect(448,0,25, 400);
}
function take_snapshot(){
    save("frame.jpg");
}

