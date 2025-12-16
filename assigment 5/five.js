
let avinash=()=>{
    //question number 1.
    let arr=[1,3,5,7,3]
    for(let i=0;i<arr.length;++i)
        console.log(arr)




  // question number 2
    let name =["abhishek","vivek","jyoti"]
    for(let i=0;i<name.length;++i){
        if(name.length>5)
        {
            console.log("long name")
        }
        else{
        console.log("short name")
    }
    }

    
//question number 3.

    let arr1=["abhishek",18,"bhopal"]
    let mydata={
        name:'avinash',
        age:18 ,
        city:'bhopal',


        
    }
for(  key in arr){
console.log(key+" "+arr[key])
}

//question number 6.

let number=[2,4,6,7,3]
largest=number[0];
for(let i=0;i<number.length;++i)
{
if(number[i]>largest)
{
    largest=number[i];
    
}
}
console.log("largest number is" +largest)

//question number 8.
let obj={
  name:"abhishek",
  city:"bhopal",
}
let obj1={
    play:"circket",
    age:18,
}

let objmerge={
    ...obj,...obj1
}
console.log(objmerge)

// //questin number 9.

let marks=[50,80,40,34,50,90]
let count=0;

for(let i=0;i<marks.length;++i)
{
    
    if(marks[i]>50){
        count++;
    }

    else{
         
    }
}
console.log("marks grater than 50" ,count)

// //question number 10.

let city=["bhopal","delhi","punjab"]
let index=0;
for(let i=0;i<city.length;++i)
{
    index++;
}
console.log(index + "=> "+ city)

}