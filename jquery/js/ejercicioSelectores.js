/*INSTRUCCIONES DEL EJERCICIO */
$(document).ready(function () {
    /*a. Asigna la clase borde a REUNIONES y PLANNING.*/
    $("p").addClass("borde");
    /*b. Asigna la clase verde a los días de la semana.*/
    $("ul").eq(1).children().addClass("verde");
    /*c. Borra la clase borde.*/
    $("p").removeClass("borde");
    /*d. La clase borde se debe asignar o quitar según hagamos click sobre REUNIONES o PLANNING.*/
    $("p").click(function (){
        if ($(this).hasClass("borde"))
            $(this).removeClass("borde");
        else
            $(this).addClass("borde");
    });
    /*e. Modifica REUNIONES por ‘REUNIONES DE ESTA SEMANA’.*/
    $("p:contains(REUNIONES)").text("REUNIONES DE ESTA SEMANA");
    /*f. Modifica ‘PLANNING’ por ‘PLANIFICACIÓN’.*/
    $("p:contains(PLANNING)").text("PLANIFICACIÓN");
    /*g. Elimina los elementos de las listas que estén vacíos.*/
    $("li:empty").remove();
    /*h. Añade el módulo de SÁBADO al final de la lista de PLANNING. */
    $("ul").eq(1).append("<li>SÁBADO</li>");
    /*i. Añade  al principio de la lista del LUNES 'Comentar finde'. */
    $("li:contains(LUNES) ul").prepend("<li class='azul'>Comentar finde</li>");
    /*j. Vacía la lista de REUNIONES.*/
    $("ul").eq(0).remove();
    /*k. Elimina la lista que contiene las tareas del MIÉRCOLES.*/
    $("li:contains(MIÉRCOLES) ul").remove();
});