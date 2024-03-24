function setup(){
    video = createCapture(VIDEO);
    video.position(150,560);
    video.size(150,300)
    canvas = createCanvas(300,560);
    canavs.size(150,300);
    posenet = ml5.poseNet(modelLoaded);
    posenet.on('pose', gotposes)
}
function modelLoaded(){
    console.log("model is loaded");
}
function preload(){

}

function gotposes(){
    
}