let enlace = document.getElementById("enlace_1");
let parrafo = document.getElementById("contenidos_1");
enlace.addEventListener("click", ()=>{
    if(enlace.textContent=="Ocultar contenidos")
    {
        parrafo.style.display = "none";
        enlace.textContent="Mostrar contenidos";
    }else{
        parrafo.style.display = "block";
        enlace.textContent="Ocultar contenidos";
    }
});

/*EJEMPLO2*/
let btnSaludar = document.getElementsByTagName("button")[0];
btnSaludar.addEventListener("click", ()=>{
    let nombre = document.getElementById("nombre").value;
    let poblacion = document.getElementById("poblacion").value;
    let salida = document.getElementById("salida");
    /*salida.textContent = "¡Hola "+nombre+" de "+poblacion+" ! ¡Te damos la bienvenida!";*/
    /*con Template Literals*/
    salida.textContent = `¡Hola ${nombre} de ${poblacion} ! ¡Te damos la bienvenida!`;
     
});

