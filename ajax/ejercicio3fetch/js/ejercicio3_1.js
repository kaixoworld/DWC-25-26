
// Llamada MUY sencilla al API
fetch("https://pokeapi.co/api/v2/pokemon?limit=50")
    .then(respuesta => respuesta.json())
    .then(datos => {
       let lista = document.getElementsByTagName("ul")[0];
       console.log(datos);
       datos.results.forEach(pokemon=>{
            let nuevoLi = document.createElement("li");
            nuevoLi.textContent = pokemon.name;
            lista.appendChild(nuevoLi);
       });
    })
    .catch(error => console.error(error));
