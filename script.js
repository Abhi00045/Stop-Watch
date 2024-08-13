let displayTimer = document.getElementById("timerStart");
let timer = null;
let startTimer =0;
let elapsedTime =0;
let isRunning = false;
let dis = displayTimer.innerText;

function start(){
    if(!isRunning){
        startTimer=Date.now()-elapsedTime;
        // console.log(startTimer);
        timer=setInterval(update,10);
        // console.log(timer);
        
        isRunning=true;
    }

}
function stop(){
    if(isRunning){
        clearInterval(timer)
        elapsedTime=Date.now()-startTimer;
        isRunning=false
    }
    
    
}
function reset(){
    clearInterval(timer)
     timer = null;
    startTimer =0;
    elapsedTime =0;
     isRunning = false;
  displayTimer.innerText=`00:00:00:00`  
}
function update(){
    let currentTime = Date.now();
    elapsedTime = currentTime - startTimer;
    let hours = Math.floor(elapsedTime/(1000 * 60 *60 ));
    let minutes = Math.floor(elapsedTime/(1000 *60)%60);
    let seconds = Math.floor(elapsedTime/1000 % 60);
    let milliSeconds = Math.floor(elapsedTime % 1000 / 10);
    let dis = displayTimer.innerText=`${hours}:${minutes}:${seconds}:${milliSeconds}`;
    document.getElementById("lapbtn").addEventListener("click",()=>{
        stop()
        console.log(dis);
        
    })  
}
