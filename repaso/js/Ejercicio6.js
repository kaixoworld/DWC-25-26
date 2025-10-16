/*BOTONES*/
let botones = document.getElementsByTagName("input");
let btnEnviar = botones[0];
let btnEliminar = botones[1];
let btnNube = botones[2];
/*lista destinatarios y texto del  mensaje*/
let destinatarios = document.getElementById("destinat");
let txtMensaje = document.getElementById("textoMensaje"); 
/*LISTA MENSAJES*/ 
let listaDefinitiva = document.getElementById("listaDefinitiva");
/*PÁRRAFO MENSAJE EN LA LISTA DE MENSAJES INFERIOR*/ 
let mensaje = document.getElementById("mensaje");
/*BOTÓN ENVIAR*/
btnEnviar.addEventListener("click", ()=>{
    let destinat = destinatarios.options[destinatarios.selectedIndex].value;
    if(destinat=="selecciona"){
        alert("No has seleccionado destinatario del mensaje :(");
    }else{
        let textoMensaje = txtMensaje.value;
        if(textoMensaje=="")
        {
            alert("¡No has escribo nada! :(");    
        }else{
            if (mensaje.textContent !=""){
                mensaje.textContent="";
            }
            //enviamos el mensaje
            let parrafDesti = document.createElement("p");
            parrafDesti.textContent = `Destinatario: ${destinatarios.options[destinatarios.selectedIndex].text}`;
            /*
            parrafDesti.textContent = "Destinatario:"+ destinat.text;
            */ 
            let parrafMensaje = document.createElement("p");
            parrafMensaje.textContent = `Mensaje: ${textoMensaje}`;

            listaDefinitiva.appendChild(parrafDesti);
            listaDefinitiva.appendChild(parrafMensaje);
        }
    }
});
/*BOTÓN ELIMINAR*/
btnEliminar.addEventListener("click", ()=>{
    let seguir = confirm("¿Estás seguro/a de que quieres elminar los mensajes?");
    if (seguir){
        destinatarios.selectedIndex = 0;
        txtMensaje.value ="";
        window.location.reload();
    }
});
/*BOTÓN A LA NUBE*/
btnNube.addEventListener("click", ()=>{
    let mensajeNube="";
    let mensajes = listaDefinitiva.getElementsByTagName("p");
    for (mensaje of mensajes){
        mensajeNube += `${mensaje.textContent} \n`;
        /*
        mensajeNube += mensaje.textContent + "\n";
        */ 
    }
    alert(mensajeNube);
});
