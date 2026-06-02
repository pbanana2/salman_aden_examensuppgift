document.addEventListener("keydown", (event) =>{
    let code = document.getElementById(event.code);
    console.log(event)
    if(code != CapsLock){
        code.style="background-color:blue"
    }
    else{
        if(code.style.backgroundColor != "blue"){
            code.style="background-color:blue"
        }
        else{
            code.style="background-color:black"
        }
    }
});

document.addEventListener("keyup", (event) =>{
    let code = document.getElementById(event.code);
    
    if(code != CapsLock){
        code.style = "background-color:black"
    }
})