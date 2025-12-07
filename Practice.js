
let boxes=document.querySelectorAll(".box")
let clear=document.querySelectorAll("#clear")

let turnx=true;

const winpatterns=[
    [0,1,2],
    [3,4,5],
    [0,4,8],
    [0,3,6],
    [2,5,8],
    [2,4,6],
    [1,4,7],
    [6,7,8],

];

boxes.forEach((box) => {
   box.addEventListener("click",()=>{
    console.log("box was clicked");
   if(turnx)
   {
    box.innerHTML="x"
    turnx=false;
   }
   else{
    box.innerHTML="O"
    turnx=true;
   }
   }) ;
});
