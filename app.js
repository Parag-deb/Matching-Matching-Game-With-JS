 let gameSeq =[];
 let userSeq =[];
 let high_Score = 0;
let btns =["yellow" , "red" , "purple" , "green"];
 let started =false;
 let level =0;

 let h2 = document.querySelector("h2");
 let highScoreDisplay = document.getElementById("high-score");

 document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game is started");
        started = true;

        levelup();
    }
 });
 function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash"); 
    }, 250);
 }

 function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 250);
 } 
 function levelup(){ 
    userSeq = [];
    level++;
    h2.innerText =`Level ${level}`;

    //random button flash
    let randIdx = Math.floor(Math.random() *3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randbtn);
    // console.log(randColor);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randbtn);

 }

 function checkAns(idx){

    if(userSeq[idx] == gameSeq[idx]){
      
        if(userSeq.length ==gameSeq.length){
            setTimeout(levelup, 1000);
        }
     
    }
    else{
       high_Score = Math.max(high_Score, level);
       highScoreDisplay.textContent = high_Score;
        h2.innerHTML = `Game Over!! Your Score Was <b>${level}</b>!!  <br>Press any key to start...`;
      //   <br><b>HIGH SCORE IS ${high_Score}!!</b>
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "rgb(180, 216, 175)";
        }, 150);
        reset();
        
    }
 }

 function btnPress(){
    // console.log("button is pressed");
    // console.log(this);
    let btn =this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    console.log(userColor); 
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
 }

 let allBtns = document.querySelectorAll(".btn");
 for(btn of allBtns){
    btn.addEventListener("click" , btnPress);
 }

 function reset() {
    started = false;
    gameSeq =[];
    userSeq = [];
    level = 0;
 }
