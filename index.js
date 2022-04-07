var gameActive = 0;
var gameLevel = 1;
var checkId = 1;
var gameArray = [];

function animateBtn(num){
    document.getElementById("b"+num+"").style.opacity = "0.5";
    setTimeout(function(){
        document.getElementById("b"+num+"").style.opacity = "1";
    }, 100);
}

function playSound(num){
    var audio = new Audio("sounds/s"+num+".wav");
    audio.play();
}

function getRandom(){
    return Math.floor(1+Math.random()*4);
}

function gameStop(){
    document.getElementById("level").innerHTML = "Oops! Game Over... "
    document.getElementById("body").style.backgroundColor = "#890F0D";
    document.getElementById("b5").style.visibility = "visible";
    gameArray = [];
    checkId = 1;
    gameLevel=1;
    gameActive = 0;

}



document.getElementById("b1").onclick = function(){
    if(gameActive){
        animateBtn(1);
        playSound(1);
       
        console.log("b1 pressed");
        console.log(gameArray);
        console.log(checkId);

        // setTimeout(function(){

        // },2000);
       if(gameArray[checkId]===1){
           console.log("ok");
            checkId++;
            if(checkId===gameArray.length){
                setTimeout(function(){
                    var rn = getRandom();
                    gameArray.push(rn);
                    animateBtn(rn);
                    playSound(rn);
                    checkId=0;
                    gameLevel++;
                    document.getElementById("level").innerHTML = "level "+gameLevel;
                },1500);
                
            }
            
       }
       else{
          console.log("not ok");
          setTimeout(function(){},2000);
          gameStop();
       }
    }
    else{
        animateBtn(5);
    }
};

document.getElementById("b2").onclick = function(){
    if(gameActive){
        animateBtn(2);
        playSound(2);
       
        console.log("b2 pressed");
        console.log(gameArray);
        console.log(checkId);

        // setTimeout(function(){

        // },2000);
       if(gameArray[checkId]===2){
           console.log("ok");
            checkId++;
            if(checkId===gameArray.length){
                setTimeout(function(){
                    var rn = getRandom();
                    gameArray.push(rn);
                    animateBtn(rn);
                    playSound(rn);
                    checkId=0;
                    gameLevel++;
                    document.getElementById("level").innerHTML = "level "+gameLevel;
                },1500);
                
            }
            
       }
       else{
          console.log("not ok");
          setTimeout(function(){},2000);
          gameStop();
       }
    }
    else{
        animateBtn(5);
    }
};


document.getElementById("b3").onclick = function(){
    if(gameActive){
        animateBtn(3);
        playSound(3);
       
        console.log("b3 pressed");
        console.log(gameArray);
        console.log(checkId);

        // setTimeout(function(){

        // },2000);
       if(gameArray[checkId]===3){
           console.log("ok");
            checkId++;
            if(checkId===gameArray.length){
                setTimeout(function(){
                    var rn = getRandom();
                    gameArray.push(rn);
                    animateBtn(rn);
                    playSound(rn);
                    checkId=0;
                    gameLevel++;
                    document.getElementById("level").innerHTML = "Level "+gameLevel;
                },1500);
                
            }
            
       }
       else{
          console.log("not ok");
          setTimeout(function(){},2000);
          
          gameStop();
       }
    }
    else{
        animateBtn(5);
    }
};



document.getElementById("b4").onclick = function(){
    if(gameActive){
        animateBtn(4);
        playSound(4);
       
        console.log("b4S pressed");
        console.log(gameArray);
        console.log(checkId);

        // setTimeout(function(){

        // },2000);
       if(gameArray[checkId]===4){
           console.log("ok");
            checkId++;
            if(checkId===gameArray.length){
                setTimeout(function(){
                    var rn = getRandom();
                    gameArray.push(rn);
                    animateBtn(rn);
                    playSound(rn);
                    checkId=0;
                    gameLevel++;
                    document.getElementById("level").innerHTML = "Level "+gameLevel;
                },1500);
                
            }
            
       }
       else{
          console.log("not ok");
          setTimeout(function(){},2000);
          gameStop();
       }
    }
    else{
        animateBtn(5);
    }
};




document.getElementById("b5").onclick = function(){
    gameActive = 1;
    document.getElementById("b5").style.visibility = "hidden";
    document.getElementById("body").style.backgroundColor = "#011F3F"
    document.getElementById("level").innerHTML = "Level 1";
    var rn = getRandom();
    gameArray.push(rn);
    animateBtn(rn);
    playSound(rn);
    checkId=0;
    //gameLevel++;

};