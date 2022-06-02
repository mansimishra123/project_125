difference=0;
rightwristx=0
leftwristx=0

function setup(){
    video=createCapture(VIDEO);
    video.size(400,400);

canvas=createCanvas(800,400);
canvas.position(430,130);

poseNet=ml5.poseNet(video,modelloaded);
poseNet.on('pose',gotPoses)
}
 function modelloaded(){
     console.log("poseNet is Initialized")
 }


function draw(){
    background("cyan")
    document.getElementById("font-size").innerHTML="font-size text will be will be-"+difference+"px"
    fill("purple")
    textSize(difference)
    text("Mansi Mishra" ,50,400)
}
 
function gotPoses(result){

    if(result.length>0){
        console.log(result)

        rightwristx=result[0].pose.rightWrist.x
        leftwristx=result[0].pose.leftWrist.x
        difference=floor(leftwristx-rightwristx)
        console.log("leftwristx="+result[0].pose.leftWrist.x)
        console.log("rightwristx="+result[0].pose.rightWrist.x)
    }
}