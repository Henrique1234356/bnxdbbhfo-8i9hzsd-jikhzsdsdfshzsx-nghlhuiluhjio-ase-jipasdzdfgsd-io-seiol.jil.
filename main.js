noseX = 0;
noseY = 0;


function preload(){
nariz = loadImage("https://i.postimg.cc/yxj11Mh6/Paint-3-D-22-11-2023-20-28-35-removebg-preview.png");
}
function setup(){
 canvas = createCanvas(300,300);  
 canvas.center();
 video = createCapture(VIDEO);
 video.size(300,300);
 video.hide();
 poseNet = ml5.poseNet(video, modelLoaded);
 poseNet.on('pose', gotPoses);
}


function modelLoaded(){
    console.log("Modelo Carregado!");
}
function draw(){
    image(video, 0,0, 300, 300);
    fill(255,0,0);
    stroke(255,0,0);
    //circle(noseX, noseY, 20);
    image(nariz, noseX, noseY, 50,50);
}
function tirarFoto(){
    save('filtroPALHAÇO.png');                                                                         
}



function gotPoses(results){
if(results.length > 0){
    console.log(results);
    console.log("Nariz X = " + results[0].pose.nose.x);
    console.log("Nariz Y = " + results[0].pose.nose.y);
    noseX = results[0].pose.nose.x - 25;
    noseY = results[0].pose.nose.y - 25;
}
}