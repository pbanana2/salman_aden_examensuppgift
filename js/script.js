let main = document.getElementById("main")
let textDiv = document.getElementById("textDiv")
let visual = document.getElementById("visual")

const letters_5 = ["lugia", "klink", "snivy", "zubat", "eevee"]
const letters_6 = ["flygon", "mewtwo", "komala", "lombre", "gengar"]
const letters_7 = ["scyther", "rhyhorn", "pikachu", "spearow", "machoke"]
const letters_8 = ["dragalge", "dusknoir", "inteleon", "charizard", "blastoise"]
const letters_9 = ["pachirisu", "gardevoir", "toucannon", "scorbunny", "bulbasaur"]

document.addEventListener("keydown", (event) =>{
    let code = document.getElementById(event.code);

    if(code != CapsLock){
        document.getElementsByClassName("R").style="animation-duration: 1s"
        code.style="background-color:blue"
        if (AltRight.style.backgroundColor != "blue"){
            if (code === Backquote || code === Digit1 || code === Digit2
                    || code === Digit3 || code === Digit5 || code === Digit6 || code === Digit7 
                    || code === KeyY|| code === Digit0 || code == Minus || code === KeyQ
                    || code === KeyV || code === KeyW || code === KeyE || code === KeyR
                    || code === KeyU || code === KeyI || code === KeyO || code === KeyT
                    || code === KeyA || code === KeyS || code === KeyD || code === KeyF 
                    || code === KeyG || code === KeyH || code === KeyJ || code === KeyK 
                    || code === KeyK || code === KeyL || code === KeyZ || code === KeyX 
                    || code === KeyC || code === KeyB || code === KeyN || code === KeyM
                    || code === Comma || code === Period || code === Slash || code === BracketLeft
                    || code === Semicolon || code === Quote || code === IntlBackslash || code === Space){
                let text = document.createTextNode(event.key);
                textDiv.appendChild(text)
                textDiv.appendChild(visual)
            }
            else if(code === Digit4 || code === Digit8 || code === Digit9){
                if (ShiftLeft.style.backgroundColor != "blue" && ShiftRight.style.backgroundColor != "blue"){
                    let text = document.createTextNode(event.key);
                    textDiv.appendChild(text)
                    textDiv.appendChild(visual)
                }
            }
            else if(code === KeyP){
                let text = document.createTextNode(event.key);
                textDiv.appendChild(text)
                textDiv.appendChild(visual)
                var audio = new Audio('filer/fart.mp3')
                audio.play()
            }
        }

        if(code === Backspace){
            textDiv.removeChild(visual.previousSibling)
        }
        if(code === Delete){
            textDiv.innerText = ""
            textDiv.appendChild(visual)
        }

    }
    else{
        if(code.style.backgroundColor != "blue"){
            code.style.backgroundColor="blue"
        }
        else{
            code.style.backgroundColor="black"
        }
    }
});

document.addEventListener("keyup", (event) =>{
    let code = document.getElementById(event.code);
    
    if(code != CapsLock){
        code.style.transition = "all 1s ease"
        code.style.backgroundColor = "black"
    }
})