let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#rbutton");
let aftergame=document.querySelector(".winmess");
let nbtn=document.querySelector("#newbutton");
let message=document.querySelector("#msg");

let turnO = true;
const winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetgame =()=>{
    turnO=true;
    enablebox();

}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box is clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;

        }
        box.disabled=true;

        checkWinner();
    });
});

const showWinner=(winner)=>{
    message.innerText=`congractulations, Winner is ${winner}`;
    aftergame.classList.remove("hide");
    disablebox();

}
const enablebox=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
        aftergame.classList.add("hide");


    }
}
const disablebox=()=>{
    for(box of boxes){
        box.disabled=true;

    }
}
const checkWinner=()=>{
    for(let pattern of winpattern){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val !=""&&pos2val !=""&&pos3val !=""){
            if(pos1val==pos2val && pos2val==pos3val){
                console.log("Winner");
                

                showWinner(pos1val);

            }
           
            
        }
        
    }


}

newbutton.addEventListener("click",resetgame);
rbutton.addEventListener("click",resetgame);

