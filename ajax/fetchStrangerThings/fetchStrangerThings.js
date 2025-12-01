document.getElementById("btn").addEventListener("click", ()=>{
    let url= 'https://stranger-things-api.fly.dev/api/v1/characters/random?count=1';
    fetch(url)
    .then((response)=>{
        return response.json();
    })
    .then((personajes)=>{
        console.log(personajes);
        let personaje = personajes[0];
        if (personaje.portrayedBy !='undefined' && personaje.aliases != 'unknown' ){
            document.getElementById("avatar").src= personaje.photo;
            document.getElementById("avatar").alt= personaje.name;
            document.getElementById("interpretado").innerHTML= personaje.portrayedBy;
            document.getElementById("alias").innerHTML= personaje.aliases;
        }
    })
    .catch(error =>{
        console.log("Error capturado por CATCH: "+error);
    });
});