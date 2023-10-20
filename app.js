let winningScore=3;
let isGameOver=false;
const resetButton=document.querySelector("#reset");
const select=document.querySelector("select");

const P1={
    score:0,
    button:document.querySelector("#p1Button"),
    display:document.querySelector("#p1Display")
}

const P2={
    score:0,
    button:document.querySelector("#p2Button"),
    display:document.querySelector("#p2Display")
}

P1.button.addEventListener("click",function(){
    gameplay(P1,P2);
})
P2.button.addEventListener("click",function(){
    gameplay(P2,P1);
})
resetButton.addEventListener("click", reset)

select.addEventListener("change",function(e){
    winningScore=parseInt(this.value);
    reset();
})

function reset(){
        isGameOver=false;
        for(let player of [P1,P2]){
        player.score=0;
        player.display.textContent=player.score;
        player.display.classList.remove("has-text-success","has-text-danger");
        player.button.disabled=false;
        }
        
    }

function gameplay(player,opponent){
    if(!isGameOver)
{
    player.score+=1;
    player.display.textContent=player.score;
    if(player.score===winningScore){
    isGameOver=true;
    player.display.classList.add("has-text-success");
    opponent.display.classList.add("has-text-danger");
    player.button.disabled=true;
    opponent.button.disabled=true;
    }
}
}

//const buttonP1=document.querySelector("#p1Button");
//const buttonP2=document.querySelector("#p2Button");
// const spanP1=document.querySelector("#p1Display");
// const spanP2=document.querySelector("#p2Display");


// let p1Score=0;
// let p2Score=0;

// buttonP1.addEventListener("click",(e)=>{
// if(!isGameOver)
// {
//     p1Score++;
//     spanP1.textContent=p1Score;
//     if(p1Score===winningScore){
//     isGameOver=true;
//     spanP1.classList.add("has-text-success");
//     spanP2.classList.add("has-text-danger");
//     buttonP1.disabled=true;
//     buttonP2.disabled=true;
//     }
// }
// })

// buttonP2.addEventListener("click",(e)=>{
//     if(!isGameOver)
//     {
//         p2Score++;
//         spanP2.textContent=p2Score;
//         if(p2Score===winningScore){
//         isGameOver=true;
//         spanP2.classList.add("has-text-success");
//         spanP1.classList.add("has-text-danger");
//         buttonP1.disabled=true;
//         buttonP2.disabled=true;
//         }
//     }
//     })

// function reset(){
//     isGameOver=false;
//     p1Score=0;
//     p2Score=0;
//     spanP1.textContent=p1Score;
//     spanP2.textContent=p2Score;
//     spanP1.classList.remove("has-text-success","has-text-danger");
//     spanP2.classList.remove("has-text-success","has-text-danger");
//     buttonP1.disabled=false;
//     buttonP2.disabled=false;
// }