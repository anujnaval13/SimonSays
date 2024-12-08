let gameSeq = [];
let userSeq = [];
let level = 0;
let started = false;

let boxes = document.querySelectorAll(".box");
function flashIt(){
    this.classList.add("flash");
    setTimeout(() => {
        this.classList.remove("flash");
    }, 250);
    if(this.id == "red") userSeq.push(1);
    if(this.id == "green") userSeq.push(2);
    if(this.id == "yellow") userSeq.push(3);
    if(this.id == "blue") userSeq.push(4);
    //console.log(userSeq);
    checkInput();
}
for(box of boxes){
    box.addEventListener("click", flashIt);
}

function choose(){
    let lev = document.querySelector(".level");
    lev.innerText = `Level ${++level}`;
    let i = (Math.floor(Math.random() * 4) + 1);
    if(i == 1){
        document.querySelector("#red").classList.add("flash");
        setTimeout(() => {
            document.querySelector("#red").classList.remove("flash");
        },250);
    }
    else if(i == 2){
        document.querySelector("#green").classList.add("flash");
        setTimeout(() => {
            document.querySelector("#green").classList.remove("flash");
        },250);
    }
    else if(i == 3){
        document.querySelector("#yellow").classList.add("flash");
        setTimeout(() => {
            document.querySelector("#yellow").classList.remove("flash");
        },250);
    }
    else if(i == 4){
        document.querySelector("#blue").classList.add("flash");
        setTimeout(() => {
            document.querySelector("#blue").classList.remove("flash");
        }, 250);
    }
    gameSeq.push(i);
}

function startGame(){
    if(started == false){
        choose();
        started = true;
        console.log("Game has started");
    }
    else{
        console.log("Game has already started, please Continue.")
    }
}

function checkInput(){
    for(let k = 0; k<userSeq.length; k++){
        if(userSeq[k] != gameSeq[k]){
            alert(`Game Over! Your Score was ${--level}`);
            reset();
            return;
        }
    }
    if(userSeq.length == gameSeq.length){
        setTimeout(() => {
            userSeq = [];
            choose();
        }, 1000);
    }
}

function reset() {
    gameSeq = [];
    userSeq = [];
    level = 0;
    started = false;
    document.querySelector(".level").innerText = "Press any key to start";
}

document.addEventListener("keypress", startGame);