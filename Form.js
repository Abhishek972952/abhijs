
//trim(),//.focus

let signup=()=>{
    let name=document.querySelector('#name').value.trim()
    let num=document.querySelector('#num').value.trim()
    let email=document.querySelector('#email').value.trim()
    let pass=document.querySelector('#pass').value.trim()
    let cpass=document.querySelector('#cpass').value.trim()


    let errname=document.querySelector('#errname')
    let errnum=document.querySelector('#errnum')
    let erremail=document.querySelector('#erremail')
    let errpass=document.querySelector('#errpass')
    let errcpass=document.querySelector('#errcpass')

    if(name==""){
        errname.innerHTML="please enter a name"
        errname.style.color="red"
        return false
    }

    else if(num==""){
        errnum.innerHTML="please enter a number"
        errnum.style.color="red"
        return false
    }

    else if(num.length!=10)
    {
      errnum.innerHTML="please enter vailid number"
      errnum.style.color="blue"
      return false
    }

    else if(isNaN(num))
    {
        errnum.innerHTML="please enter only number"
        errnum.style.color="red"
        return false
    }

    else if(email==""){
        erremail.innerHTML="please enter a email"
        erremail.style.color="red"
        return false
    }
    
    else if(!(email.includes('@')  && email.includes('.com') ))
    {
        erremail.innerHTML="please enter vailid email"
        return false
    }

    
    else if(pass==""){
        errpass.innerHTML="please enter a password"
        errpass.style.color="red"
        return false
    }

    else if(!(pass.match(/[1234567890]/) && pass.match(/[@#$%^&*]/) && pass.match(/[A-Z]/) && pass.match(/[a-z]/)))
    {
        errpass.innerHTML="please enter vailid pass"
        errpass.style.color="red"
        return false
    }
    
    else if(cpass==""){
        errcpass.innerHTML="please enter a cpassword"
        errcpass.style.innerHTML="blue"
        return false
    }

    else if(pass!=cpass)
    {
       errpass.innerHTML="please enter vailid cpass"
       document.querySelector("#cpass").value=""
       return false
    }


    
    else {
     
    }

localStorage.setItem("name",name)   
localStorage.setItem("number",num)   
localStorage.setItem("email",email) 
localStorage.setItem("pass",pass)   

location.href="Login.html"
return false

}

let login=()=>{
    let loginname=document.querySelector('#loginname').value.trim()
    let loginpass=document.querySelector('#loginpass').value.trim()

    let localname=localStorage.getItem('name')
    let localpass=localStorage.getItem('pass')

    if(loginname==localname && localpass==loginpass)
    {
        location.href="home.html"
        return false
    }

    else{
        alert("Invailid credentials")
        return false
    }
}