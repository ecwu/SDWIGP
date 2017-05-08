var molePosition = [false,false,false,false,false,false,false,false,false];//init the original Mole Position Array
var molePositionGenerator = [1,2,3,4,5,6,7,8,9];//init the Position Generator Array to prevent repeat
var scoreCounter = 0;//variable for record user score
var strikesCounter = 0;//variable for record user number of strikes
var startTime = '';//record Start Timestamp
var endTime = '';//record End and current Timestamp
var restTime = '01:00';
var playerName = 'Anonymous';//original player is anonymous
var timer = setInterval(function(){ timerPrint() },1000);//start the loop function
var checker = setInterval(function(){ timerChecker() },1000);
var generator = setInterval(function(){ disappearTime() },1000);
function mainTimer() {
    endTime = +new Date();//get the current timestamp(int digital)
    return parseInt(60-(parseInt(endTime) - parseInt(startTime))/1000);
}
function timerPrint(){
    if (startTime === ''){
        return 0;
    }else{
        endTime = +new Date();//get the current timestamp(int digital)
        if (mainTimer() === 60){//generate the DisplayTimer Info
            restTime = '01:00';
        }else if(mainTimer() >= 10){
            restTime = '00:' + mainTimer();
        }else{
            restTime = '00:0' + mainTimer();//if the remain time is less than 10, a '0' will add before the digit
        }
        document.getElementById('displayTimer').innerHTML = restTime;//write it to the DisplayTimer
    }
}
function scorePrint(){//this function is use to print the rest time to the Score Display area
    document.getElementById('displayScore').innerHTML = scoreCounter;
}
function timerChecker(){//this function is use to check if the current game status
    if (mainTimer() === 0){//if the times up, All the function will stop, and the score window will pop up
        clearInterval(checker);
        clearInterval(timer);
        clearInterval(generator);
        startTime = '';//reset and clean the startTime
        document.getElementById('displayTimer').innerHTML = '00:00';
        showScore();//print the final score
    }else if (scoreCounter <= 0 && strikesCounter !== 0){//if your score reach to 0, All the function will stop
        clearInterval(checker);
        clearInterval(timer);
        clearInterval(generator);
        startTime = '';
        document.getElementById('displayTimer').innerHTML = '00:00';
        showScore();
    }
}
function startGame() {
    if (document.getElementById('startBtn').innerHTML === 'Reset'){//change the start btn to reset btn
        restartGame();//start the game(write the start timestamp)
    }
    startTime = +new Date();
    document.getElementById('startBtn').innerHTML = 'Reset';
}
function restartGame(){//reset the game by reload the page
    location.reload();
}
function positionGenerator(){//this function is use to Generate 3 different Mole Postion
    var positionArray = new Array;
    for(var i = 0; i < 3; i+=1){
        var position = Math.floor(Math.random()*8);
        if(molePositionGenerator[position] === null){
            i -= 1;
        }else{
            positionArray.push(molePositionGenerator[position]);//the molePositionGenerator Array is use to check there is no repeat number
            molePositionGenerator[position] = null;
        }
    }
    molePositionGenerator = [1,2,3,4,5,6,7,8,9];//reset the original check array
    return positionArray;//sent the generated mole position back to function
}
function moleHoleInitialization() {
    for (var i = 1; i < 10; i += 1){//init the mole for display
        var holeName = "hole" + i;
        if (molePosition[i-1] === null){
            document.getElementById(holeName).src = 'img/2.png';//bad mole
            document.getElementById(holeName).alt = 'bad';
        }else if (molePosition[i-1]){
            document.getElementById(holeName).src = 'img/1.png';//good mole
            document.getElementById(holeName).alt = 'yes';
        }else{
            document.getElementById(holeName).src = 'img/0.png';//hole
            document.getElementById(holeName).alt = 'no';
        }
    }
}
function moleArrayChanger(time){//make the Generated number to a postion array
    moleHoleInitialization();
    var position = positionGenerator();
    for (var i=0; i < position.length; i += 1){
        var seed = position[i];
        if (i === 2){
            if (Math.floor(Math.random()*10) >= 8){//if the bad mole generated, that postion will modify to null.
                molePosition[seed] = null;
                break;
            }
        }
        molePosition[seed] = true;
    }
    moleHoleInitialization();//change the interface
    molePosition = [false,false,false,false,false,false,false,false,false];
}
function disappearTime(){//showtime decrease controler
    if (mainTimer() >= 40){
        moleArrayChanger(1000);
    }else if (mainTimer() >= 20){//change show up time every 20 seconds.
        clearInterval(generator);
        generator = setInterval(function(){ disappearTime() },500);
        moleArrayChanger(500);
    }else if (mainTimer() < 20){
        clearInterval(generator);
        generator = setInterval(function(){ disappearTime() },250);
        moleArrayChanger(250);
    }
}
function clickMole(id){//check if the click is a valid click.
    if (startTime !== ''){
        strikesCounter += 1;
        document.getElementById('displayStrikes').innerHTML = strikesCounter;//good mole add score
        if (document.getElementById(id).alt === 'yes') {
            document.getElementById(id).src = 'img/3.png';
            document.getElementById(id).alt = 'no';
            scoreCounter += 1;
            scorePrint();
        }else if (document.getElementById(id).alt === 'bad'){//bad mole minus score
            document.getElementById(id).src = 'img/0.png';
            document.getElementById(id).alt = 'no';
            scoreCounter -= 1;
            scorePrint();
        }
    }
}
function showScore(){//if time up, input the final score to the display window
    document.getElementById('finalScore').innerHTML = scoreCounter + " (Totle Strikes Number:"+ strikesCounter +")";
    document.getElementById('username3').innerHTML = playerName;
    $(function()
    {
        $("#showScoreBtn").click();
    });
}
function showUsername(){
    document.getElementById('finalScore').innerHTML = scoreCounter + " (Totle Strikes Number:"+ strikesCounter +")";
    document.getElementById('username1').innerHTML = 'Anonymous';
    $(function()
    {
        $("#showUsernameBtn").click();
    });
}
function changeUsername(id){//function use to check if the username is valid
    var usernameTest = /^[A-Za-z]*$/;//RegEx
    var username = document.getElementById(id).value;
    document.getElementById('username1').innerHTML = document.getElementById(id).value;
    document.getElementById('username2').innerHTML = document.getElementById(id).value;
    document.getElementById("submitId").disabled=false;//enable the btn
    if (usernameTest.test(username)){
        document.getElementById('usernameAlert').innerHTML = '';
        return username;
    }else{
        document.getElementById('usernameAlert').innerHTML = 'Invalid Username';
    }
}
function saveUsername(name){//save the user name to variable
    var username = changeUsername('inputUsername');
    if (name === ''){
        document.getElementById('showUsernameBtn').innerHTML = 'Login as: ' + username;
        playerName = username;
    }else{
        document.getElementById('showUsernameBtn').innerHTML = 'Login as: ' + name;
        playerName = name;
    }
}
function beforeSubmit(){//input the info for PHP
    document.getElementById('un').value = playerName;
    document.getElementById('nos').value = strikesCounter;
    document.getElementById('sc').value = scoreCounter;
}