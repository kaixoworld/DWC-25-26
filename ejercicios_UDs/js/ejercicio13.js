function pedirNota(){
    let notaSolicitada = prompt("Introduce tu nota (0-10): ");
    while(isNaN(notaSolicitada)||notaSolicitada<0||notaSolicitada>10)
        notaSolicitada = prompt("¡ERROR!Introduce tu nota (0-10): ");
    return notaSolicitada;
}
let notaUsuario = pedirNota();
if (notaUsuario<5)
    console.log("SUSPENDIDO");
else if (notaUsuario>=5 && notaUsuario<7)
    console.log("APROBADO");
else if (notaUsuario>=7 && notaUsuario<9)
    console.log("NOTABLE");
else
    console.log("SOBRESALIENTE");
/*
switch (notaUsuario)
{
    case 0:case 1:case 2:case 3:case 4: console.log("SUSPENDIDO");break;
    case 5:case 6: console.log("APROBADO");break;
    case 7:case 8:console.log("NOTABLE");break;
    default: console.log("SOBRESALIENTE");
}*/