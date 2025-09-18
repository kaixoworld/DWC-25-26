function pedirNumero(){
    let numeroUsuario = prompt("Introduce un número: ");
    while (numeroUsuario=="" || isNaN(numeroUsuario) || numeroUsuario<0)
    {
        numeroUsuario = prompt("ERROR!! El número debe ser positivo: ");
    }
    return numeroUsuario;
}
function calcularFactorial(numero){
    let factorial=1;
    for(let index=1; index<=numero;index++)
        factorial *= index;
    return factorial;
}
var numero = pedirNumero();
console.log(numero+" ! = "+ calcularFactorial(numero));