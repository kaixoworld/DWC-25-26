let listaElementos = document.getElementById("lista");
/*1er boton: insertar*/ 
document.getElementsByTagName("button")[0].addEventListener("click", ()=>{
    /**INSERTAR UN ELEMENTO EN LA LISTA*/ 
    let textoNuevoElemento = prompt("Introduce el nuevo elemento de la lista:");
    let nuevoListItem = document.createElement("li");
    nuevoListItem.textContent = textoNuevoElemento;
    listaElementos.appendChild(nuevoListItem);
});
/*2ndo boton: eliminar último*/ 
document.getElementsByTagName("button")[1].addEventListener("click", ()=>{
    /**BORRAMOS EL ÚLTIMO ELEMENTO EN LA LISTA*/ 
    listaElementos.removeChild(listaElementos.lastChild);
});