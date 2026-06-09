let main = document.getElementById("main")
let message = document.getElementById("message")
let textDiv = document.getElementById("textDiv")
let visual = document.getElementById("visual")
let answer = ""
let pokemon_image = document.getElementById("pokemon_image")

document.addEventListener("keydown", (event) =>{
    let code = document.getElementById(event.code);
    var audio = new Audio('filer/click.mp3')
    audio.play()
    console.log(event)
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
                    || code === Semicolon || code === Quote || code === Space){
                let text = document.createTextNode(event.key);
                textDiv.appendChild(text)
                textDiv.appendChild(visual)
                answer += event.key
            }
            else if(code === Digit4 || code === Digit8 || code === Digit9){
                if (ShiftLeft.style.backgroundColor != "blue" && ShiftRight.style.backgroundColor != "blue"){
                    let text = document.createTextNode(event.key);
                    textDiv.appendChild(text)
                    textDiv.appendChild(visual)
                    answer += event.key
                }
            }
            else if(code === KeyP){
                let text = document.createTextNode(event.key);
                textDiv.appendChild(text)
                textDiv.appendChild(visual)
                var audio = new Audio('filer/fart.mp3')
                audio.play()
                answer += event.key
            }
        }

        if (code === IntlBackslash){
            let r =document.getElementsByClassName("R")
            let l = document.getElementsByClassName("L")
            if (AltRight.style.backgroundColor != "blue"){
                if (ShiftLeft.style.backgroundColor == "blue" || ShiftRight.style.backgroundColor == "blue"){
                    for(let i=0; i < r.length; i++){
                        r[i].style.animationDuration="1s"
                    }
                }
                else{
                    for(let i=0; i < l.length; i++){
                        l[i].style.animationDuration="1s"
                    }
                }
            }
            else{
                for(let i=0; i < r.length; i++){
                    r[i].style.animationDuration="0s"
                }
                for(let i=0; i < l.length; i++){
                    l[i].style.animationDuration="0s"
                }
            }
        }

        if(code === Backspace){
            textDiv.removeChild(visual.previousSibling)
            answer = answer.slice(0, -1)
            var audio = new Audio('filer/slip.mp3')
            audio.play()
        }

        if(code === Delete){
            textDiv.innerText = ""
            textDiv.appendChild(visual)
            answer = ""
            var audio = new Audio('filer/delete.mp3')
            audio.play()
        }

        if(code === Enter){
            event.preventDefault()
            if(playing == "yes"){
                if (answer.toLowerCase() == pokemon){
                    var audio = new Audio('filer/nice.mp3')
                    audio.play()
                    index = current_list.indexOf(pokemon)
                    current_list.splice(index, 1)
                    alert("correct!")
                    pokemon_image.src=""
                    answer = ""
                    textDiv.innerText = ""
                    textDiv.appendChild(visual)
                    playing = "no"
                }
                else{
                    var audio = new Audio('filer/dead.mp3')
                    audio.play()
                    alert("incorrect!")
                }
            }
        }
        if(code === Space){
            event.preventDefault()
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

const letters_5 = ["lugia", "klink", "snivy", "zubat", "eevee", "absol", "rotom", "bagon"]
const letters_6 = ["flygon", "mewtwo", "komala", "lombre", "gengar", "piplup", "bidoof", "lechonk"]
const letters_7 = ["scyther", "rhyhorn", "pikachu", "spearow", "machoke", "dratini", "altaria"]
const letters_8 = ["giratina", "dusknoir", "inteleon", "charizard", "blastoise", "regirock", "vaporeon"]
const letters_9 = ["pachirisu", "gardevoir", "toucannon", "scorbunny", "bulbasaur", "tyranitar"]
var pokemon
var current_list
var playing = "no"

function random_5(){
    playing = "yes"
    message.innerHTML = "Who's that pokémon?"
    current_list = letters_5
    pokemon = letters_5[Math.floor(Math.random() * letters_5.length)]
    document.getElementById("pokemon_image").src="filer/pokemon/" + pokemon + ".avif"
}

function random_6(){
    playing = "yes"
    message.innerHTML = "Who's that pokémon?"
    current_list = letters_6
    pokemon = letters_6[Math.floor(Math.random() * letters_6.length)]
    document.getElementById("pokemon_image").src="filer/pokemon/" + pokemon + ".avif"
}

function random_7(){
    playing = "yes"
    message.innerHTML = "Who's that pokémon?"
    current_list = letters_7
    pokemon = letters_7[Math.floor(Math.random() * letters_7.length)]
    document.getElementById("pokemon_image").src="filer/pokemon/" + pokemon + ".avif"
}

function random_8(){
    playing = "yes"
    message.innerHTML = "Who's that pokémon?"
    current_list = letters_8
    pokemon = letters_8[Math.floor(Math.random() * letters_8.length)]
    document.getElementById("pokemon_image").src="filer/pokemon/" + pokemon + ".avif"
}

function random_9(){
    playing = "yes"
    message.innerHTML = "Who's that pokémon?"
    current_list = letters_9
    pokemon = letters_9[Math.floor(Math.random() * letters_9.length)]
    document.getElementById("pokemon_image").src="filer/pokemon/" + pokemon + ".avif"
}