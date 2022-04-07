var gameActive = false;
var gameLevel = 1;
var gameArray = [];
var checkId = 0;
var ids = ["#b1", "#b2", "#b3", "#b4", "#b5"];

function getRandom(){
    return Math.floor(1+Math.random()*4);
}
function getNum(btn){
    for(var i = 0; i<ids.length; i++){
        if(ids[i]==="btn") return i;
    }
    return -1;
}

function playSound(num){
    var audio = new Audio("sounds/s"+num+".wav");
    audio.play();
}

function gameStop(){
    $("body").css("background-color", "#890F0D");
    gameActive = false;
    $("#level").text("Opps! game over..");
    $("#b5").css("visibility", "visible");
}

$(".buzz").click(function(){
    if(gameActive){
        //console.log("ok");
        var btn = $(this).attr("id");
        
        var num = btn[1]-'0';
        btn = "#b"+num;
        $(btn).addClass("pressed");

        setTimeout(function(){
            $(btn).removeClass("pressed");
        }, 100);
        playSound(num);
       
        if(gameArray[checkId]===num){
            checkId++;
            if(checkId===gameArray.length){
                checkId = 0;
                gameLevel++;
                
                setTimeout(function(){
                    $("#level").text("Level " + gameLevel);
                    var rn = getRandom();
                    $("#b"+rn).addClass("pressed");
                    playSound(rn);
                    setTimeout(function(){
                        $("#b"+rn).removeClass("pressed");
                    });
                    gameArray.push(rn);
                }, 1000);
               
            }

        }
        else{
            gameStop();
        }
    }
    else{

        $("#b5").addClass("pressed");
        setTimeout(function(){
            $("#b5").removeClass("pressed");
        }, 100);
    }
});


$("#b5").click(function(){
    gameActive = true;
    gameArray = [];
    checkId = 0;
    gameLevel = 1;
    $("body").css("background-color", "#011F3F")
    $("#level").text("Level 1");
    $("#b5").css("visibility", "hidden");
    setTimeout(function(){

        var rn = getRandom();
        gameArray.push(rn);

        var btn = "#b"+rn;
        
        playSound(rn);
        $(btn).addClass("pressed");
        
        setTimeout(function(){
            $(btn).removeClass("pressed");
        }, 100);
    }, 100);
    
    
 
    
});