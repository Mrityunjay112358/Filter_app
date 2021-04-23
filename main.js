upperlipX = 0;
upperlipY = 0;
lipX = 0;
lipY = 0;
function preload(){
mustache = loadImage("mustache.png");
lips=loadImage("lip.png");
}

function setup(){
   canvas= createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    posenet = ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("model loaded");
}
 

function draw(){
    image(video,0,0,300,300);
    image(mustache,upperlipX,upperlipY,30,30);
    image(lips,lipX,lipY,30,30);


}

function take_snapshot(){
    save("Filter.png");
}

function gotPoses(){
    
}