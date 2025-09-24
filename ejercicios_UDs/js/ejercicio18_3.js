/*
 if (numero%7 == 0) si es múltiplo de 7
*/ 
let lineaTexto="";
for (let index=1; index<= 100; index++){
    if(index%7 == 0){
        console.log(lineaTexto + " pasapalabra");
        lineaTexto="";
    }else{
        if(index==100){
            lineaTexto += index + ".";
            console.log(lineaTexto);
        }else
            lineaTexto += index + ",";
    }
}