document.getElementsByTagName("button")[0].addEventListener("click", ()=>{
    console.log("dentro del onclick");
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function (){
        if((this.readyState== 4) && (this.status==200)){
            //trato la info del xml
            let xml = xmlhttp.responseXML;
            let tabla = "<tr><th>Artista</th><th>Título</th></tr>";
            let infoCDs = xml.getElementsByTagName("CD");
            for (cd of infoCDs){
                tabla += "<tr><td>";
                tabla += cd.getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue + "</td><td>";
                tabla += cd.getElementsByTagName("TITLE")[0].childNodes[0].nodeValue;
                tabla += "</td></tr>";
            }
            document.getElementById("info").innerHTML = tabla;
        }
    };
    xmlhttp.open("GET", "../files/catalogo.xml", true);
    xmlhttp.send();
});