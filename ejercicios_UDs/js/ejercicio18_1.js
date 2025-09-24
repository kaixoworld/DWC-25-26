function visualizarTablaMultiplicar(numero){
    //visualizo la tabla de multipilar de "numero"
    // numero * 0 = 0, numero * 1 = numero, ...numero*10=
    for(let index2=0; index2<=10; index2++){
        console.log(numero+" * "+index2+" = "+(numero*index2));
    }
}

for(let index=1; index<=10; index++){
    visualizarTablaMultiplicar(index);
}

