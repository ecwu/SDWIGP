var molePosition = [true,true,true,true,true,true,true,true,true];
var moleCornerMarks;
var time = 60;
var t;
var q;
var goBackPosition;
var mainTime;
var scoreCounter = 0;
var strikesCounter = 0;


function Help(){
    alert("Fuck you!");
}

function Exit(){
	var jumpToWebsite=confirm("Do you really want to leave?");  
	if (jumpToWebsite==true){
	    window.location.href='http://uic.edu.hk/cn/';
    };
}

function Reset() {
    time = 60;
    scoreCounter = 0;
    strikesCounter = 0;
    document.getElementById("remainTime").value = time;
    document.getElementById("playButton").innerHTML = "Play";
    document.getElementById("score").value = scoreCounter;
    document.getElementById("numberOfStrick").value =  strikesCounter;
    for(var i = 1;i < 10;i=i+1){
    document.getElementById("hole"+i).src = "img/Hole.png";
    document.getElementById("hole"+i).alt = "no";
    }
}

function countDown(){
    document.getElementById("remainTime").value = time;
	if(time !== 0){
	    time = time - 1;
        t = setTimeout("countDown()",1000);
        moleGenerator();
        document.getElementById("playButton").innerHTML = "Reset";
	}else{
	    alert("Your scores:"+scoreCounter+"\n"+"Your strickes:"+strikesCounter);
    }
}

function moleGenerator(){
    moleCornerMarks =  Math.floor(Math.random()*8);
    if(document.getElementById("hole"+moleCornerMarks).alt == "no"){
    document.getElementById("hole"+moleCornerMarks).src = "img/Hole_goodmole.png";
    document.getElementById("hole"+moleCornerMarks).alt = "yes";
    goBackPosition = moleCornerMarks;
    q = setTimeout("goBackToHole()",999);
    }
}

function goBackToHole(){
    document.getElementById("hole"+goBackPosition).src = "img/Hole.png";
    document.getElementById("hole"+goBackPosition).alt = "no";
}

function gameStartOrReplay(){
	if(document.getElementById("playButton").innerHTML == "Play"){
        countDown();
    }else{
	    var replayGame = confirm("Do you really want to replay?")
        if (replayGame){
            clearTimeout(t);
	        Reset();
        }
    }
}

function afterClick(selected){
    if(document.getElementById("playButton").innerHTML == "Reset"){
    strikesCounter = strikesCounter + 1;
    document.getElementById("numberOfStrick").value = strikesCounter;
    if(document.getElementById("hole"+selected).alt == "yes"){
        scoreCounter = scoreCounter + 1;
        document.getElementById("score").value = scoreCounter;
        document.getElementById("hole"+selected).src = "img/Hole.png";
        document.getElementById("hole"+selected).alt = "no";
    }
}
}
