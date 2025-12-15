
let abhi=()=>{
    let math=Number(document.getElementById("math").value)
    let science=Number(document.getElementById("science").value)
    let english=Number(document.getElementById("english").value)


    let marks=[math,science,english]
    for(let i=0;i<marks.length;++i)
    {
        if(marks[i]<35)
        {
            document.querySelector("#check").innerHTML="fail"
           
             
        }

        else{
           document.querySelector("#check").innerHTML="pass"
           
        }
    }

    
    
    
}

let abhi1=()=>{
    let age= Number(document.getElementById("#check").value)

    if(age>=18){
        document.getElementById("#age").innerHTML="adult"
    }

    else{
    document.getElementById("#age").innerHTML="minor"
    }
}

