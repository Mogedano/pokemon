let count = 1 //Variable que va a llevar la cuenta de esos números

function renderImage() {
    let pokemonContainer = document.getElementById('pokemon') //Declaramos la variable con let, dentro tenemos el elemento dic pokemon

    pokemonContainer.innerHTML = `<img id="poke" src="https://tinyurl.com/ironhack-pokemons/${count}.svg" alt="Pokemon image">` 
    //Añade cosas al elemento html. Esas comillas laterales, backticks, permiten añadir variables dentro de cadenas de texto 

    //var, let, const = variables
}

let prev = document.getElementById('previous')
let next = document.getElementById('next')

prev.onclick = function() {
    if(count > 1) {
        count = count - 1
        renderImage()
    }     
}    //Registrador de eventos

next.onclick = function() {
    if(count < 649) {
        count = count + 1
        renderImage()
    }
    
}

//Ahora hay que invocar esa función
renderImage()