///me gustaría cambiar los textos de los enlaces de los párrafos que tienen la clase "principal" y escribir en su lugar "http//www.google.es" y como texto "ENLACE A GOOGLE"
let parrafos = document.getElementsByClassName("principal");
console.log(parrafos);
for (let parrafo of parrafos){
    let enlaces = parrafo.getElementsByTagName("a");
    for(let enlace of enlaces){
        enlace.href="http://www.google.es";
        enlace.innerHTML = "Google";
    }
}
/*quiero en el footer sustituir el texto del párrafo por un enlace a centro san luis usando innerHTML*/
document.getElementById("small").innerHTML = "<a href='http://www.centrosanluis.com'>Enlace a CSL</a>" ;


