
//trim()

let vailid=()=>{
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

    else if(email==""){
        erremail.innerHTML="please enter a email"
        erremail.style.color="red"
        return false
    }
    else if(pass==""){
        errpass.innerHTML="please enter a password"
        errpass.style.color="red"
        return false
    }

    else if(cpass==""){
        errcpass.innerHTML="please enter a cpasswors"
        errcpass.style.innerHTML="blue"
        return false
    }
    else {

    }

}