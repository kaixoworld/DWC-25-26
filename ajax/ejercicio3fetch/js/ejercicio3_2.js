
// Llamada MUY sencilla al API
fetch("https://pokeapi.co/api/v2/pokemon?limit=50")
    .then(respuesta => respuesta.json())
    .then(datos => {
       let lista = document.getElementsByTagName("ul")[0];
       console.log(datos);
       let index=1;
       datos.results.forEach(pokemon=>{
            console.log("dentro del foreach");
            let nuevoLi = document.createElement("li");
            let nuevoParraf = document.createElement("p");
            nuevoParraf.textContent = pokemon.name;
            let url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/'+index+'.png';
            let nuevaImg = document.createElement("img");
            nuevaImg.src = url;
            nuevoLi.appendChild(nuevoParraf);
            nuevoLi.appendChild(nuevaImg);
            lista.appendChild(nuevoLi);
            index++;
       });
    })
    .catch(error => console.error(error));
