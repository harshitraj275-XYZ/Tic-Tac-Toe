let boxes = document.querySelectorAll(".tic");
let reset = document.querySelector("#reset");
let chance = 0;
const win =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
boxes.forEach((tic) => {
    tic.addEventListener("click",() =>{
        console.log("box was clicked");
        if(chance%2 ===0){
            tic.innerText = "X";
        chance++;
        }
    else{
            tic.innerText = "O";
        chance++;}
        tic.disabled = "true";
        checkWinner();
    });
});
const checkWinner = () => {
    for( let pattern of win){
        let p1 = boxes[pattern[0]].innerText;
        let p2 = boxes[pattern[1]].innerText;
        let p3 = boxes[pattern[2]].innerText;
        if(p1!=="" && p2!== "" && p3 !== ""){
            if(p1===p2 && p2===p3)
                console.log("winner", p1);}
    }}