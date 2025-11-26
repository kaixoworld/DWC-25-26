
// Llamada MUY sencilla al API
fetch("https://pokeapi.co/api/v2/pokemon?limit=50")
    .then(respuesta => respuesta.json())
    .then(datos => {
       
    })
    .catch(error => console.error(error));
