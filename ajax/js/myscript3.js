document.getElementsByTagName("button")[0].addEventListener("click", ()=>{
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function (){
        if((this.readyState== 4) && (this.status==200)){
            //trato la info del json
            let datosJSON = JSON.parse(xmlhttp.responseText);
            let tabla = document.getElementById("info");
            datosJSON.forEach(element => {
                let fila = document.createElement("tr");
                let dato = document.createElement("td");
                dato.textContent = element.Municipio;//saco el nombre del municipio
                fila.appendChild(dato);
                tabla.appendChild(fila);
            });
            
        }
    };
    xmlhttp.open("GET", "../files/ciudades.json", true);
    xmlhttp.send();
});