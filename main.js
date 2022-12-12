function setup()
{
    canvas=createCanvas(600,500);
    canvas.center()
    video=createCapture(VIDEO);
    video.hide();
    
    posenet=ml5.poseNet(video,modelloaded);
    posenet.on('pose',gotposes);
}
function modelloaded()
{
    console.log("posenet is initialized");
}
song1="";
song2="";
    leftwristx=0;
    leftwristy=0;
    rightwristx=0;
    rightwwristy=0;
    scoreleftwrist=0;
    scorerightwrist=0;
function preload()
{
    song1=loadSound("music.mp3")
    song2=loadSound("music2.mp3")
}

function draw()
{
    image(video,0,0,600,500);
    fill("#ff0000");
    stroke("#ff0000")
    if(scoreleftwrist>0.2)

    {
        circle(leftwristx,leftwristy,20);
        
        document.getElementById("name").innerHTML="The song name goes to peter parker";
        song2.pause()
        song1.play();
        song1.setVolume(1);
        song1.rate(1);
    }

    else if(scorerightwrist>0.2)
    {
        circle(rightwristx,rightwristy,20);
        document.getElementById("name").innerHTML="The song name goes to Harry Potter";
        song1.pause()
        song2.play();
        song2.setVolume(1);
        song2.rate(1);
    }
    
}
function ppllaayy()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function gotposes(results)
{
    if(results.length>0)
    {
        console.log(results);

        leftwristx=results[0].pose.leftWrist.x;
        leftwristy=results[0].pose.leftWrist.y;
        rightwristx=results[0].pose.rightWrist.x;
        rightwristy=results[0].pose.rightWrist.y;
        scoreleftwrist=results[0].pose.keypoints[9].score;

        scorerightwrist=results[0].pose.keypoints[10].score;

        console.log("leftwristx= "+leftwristx+ " and leftwristy="+leftwristy);
        console.log("rightwristx= "+rightwristx+ " and rightwristy="+rightwristy);
        console.log("scoreleftwrist = "+scoreleftwrist);
        console.log("scorerightwrist = "+scorerightwrist);
    }
}