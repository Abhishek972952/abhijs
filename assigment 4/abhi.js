
function abhishek(){

    //question number 1.
    let fruits=["apple","banana","mango","grapes"]
    console.log(fruits)
    console.log(fruits.length)

    //question number 2.

    let item=["abhi","virat","rohit"]
     item.push("sachin");
     console.log(item)
    item.pop()
    console.log(item)

    //question number 3.
    

   let fruits1=["apple","banana","mango","grapes"]
   fruits1.unshift("papaya")
   console.log(fruits1)

   fruits1.shift()
   console.log(fruits1)

   //question number 4.

let color =["green","blue","yellow"]
let color1=["red","sky"]

console.log( "mearge color" ,color.concat(color1))

//question number 5.
let word=["abhi","mishra"]
word.push("18")
console.log("push",word)

word.pop()
console.log("pop",word)

word.unshift("virat")
console.log("unhift",word)

word.shift()
console.log("shift",word)

    
}
abhishek()