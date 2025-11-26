const boton = document.getElementById("boton1");
boton.addEventListener("click", ()=>{
    console.log("dentro del onclick");
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function (){
        if((this.readyState== 4) && (this.status==200)){
            document.getElementById("contenidoAjax").innerHTML=this.responseText;
        }
    };
    xmlhttp.open("GET", "../files/ajax_info1.txt", true);
    xmlhttp.send();
});