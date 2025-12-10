
let boxes=document.querySelectorAll(".box")
let clear=document.querySelectorAll("#clear")

let turnx=true;

const Winpatterns=[
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
   box.disabled=true;

   checkWinner()

   
   }) ;
});

const checkWinner=()=>{
    for(let patterns of Winpatterns){
        
            let pos1val=boxes[patterns[0]].innerHTMl
             let pos2val=boxes[patterns[1]].innerHTML
            let pos3val=boxes[patterns[2]].innerHTML


      
            if(pos1val !="" && pos2val !="" && pos3val !=""){
                if(pos1val===pos2val && pos2val===pos3val)
                {
                    console.log("winner")
                }
            }
    }
}
