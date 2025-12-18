$(document).ready(function () {
    let deseosCreados=0;
    /*cargar arbol de deseos*/
     $("button:nth-child(1)").click(()=>{
        //leemos con fetch el json
        //fetch().then(()=>{}).then(()=>{});
        fetch("../data/deseos.json")
        .then((response)=>{
            return response.json();
        }).then((deseos)=>{
            deseos.map((deseo)=>{
                deseosCreados++;
                let mensaje = $('<div class="mensaje" id="'+deseosCreados+'" onclick="cumplirDeseo(this)"><p>'+deseo.texto+'</p></div>');
                $(mensaje).css("background-color", deseo.color);        
                $("#panelDeseos").append(mensaje);
                /*deshabilitamos botón de cargar*/
                /*incrementamos el contador que se ve con deseosCreados actualizado*/  
            });
        });
     });
});