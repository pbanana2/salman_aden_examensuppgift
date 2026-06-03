let textDiv = document.getElementById("textDiv")

document.addEventListener("keydown", (event) =>{
    let code = document.getElementById(event.code);

    if(code != CapsLock){
        code.style="background-color:blue"
        if (AltRight.style.backgroundColor != "blue"){
            if (code === Backquote || code === Digit1 || code === Digit2 || code === Digit3 
                    || code === Digit5 || code === Digit6 || code === Digit7 
                    || code === Digit0 || code == Minus || code === KeyQ
                    || code === KeyW || code === KeyE || code === KeyR || code === KeyT || code === KeyY 
                    || code === KeyU || code === KeyI || code === KeyO || code === KeyP 
                    || code === KeyA || code === KeyS || code === KeyD || code === KeyF 
                    || code === KeyG || code === KeyH || code === KeyJ || code === KeyK 
                    || code === KeyK || code === KeyL || code === KeyZ || code === KeyX 
                    || code === KeyC || code === KeyB || code === KeyN || code === KeyM
                    || code === Comma || code === Period || code === Slash || code === BracketLeft
                    || code === Semicolon || code === Quote || code === IntlBackslash){
                let text = document.createTextNode(event.key);
                textDiv.appendChild(text)
            }
            else if(code === Digit4 || code === Digit8 || code === Digit9){
                if (ShiftLeft.style.backgroundColor != "blue" && ShiftRight.style.backgroundColor != "blue"){
                    let text = document.createTextNode(event.key);
                    textDiv.appendChild(text)
                }
            }
        }

        if(code === Backspace){
            textDiv.removeChild(textDiv.lastChild)
        }
        if(code === Delete){
            textDiv.innerText = ""
        }
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