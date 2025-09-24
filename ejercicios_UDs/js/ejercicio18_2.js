//voy a escribir 10 lineas
/*for(let index=1; index<=10; index++){
    let cadenaNumeros = "";
    //for para visualizar 1, 12, 123, 1234...
    for(let index2=1; index2<=index; index2++){
        cadenaNumeros += index2; 
    }
    console.log(cadenaNumeros);
}*/
//MUCHO MEJOR!!!!!
let cadenaNumeros = "";
for(let index=1; index<=10; index++){
    cadenaNumeros += index;
    console.log(cadenaNumeros);
}