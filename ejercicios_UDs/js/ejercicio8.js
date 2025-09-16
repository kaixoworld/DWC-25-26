function pedirNumero(){
    var numero = prompt("Introduce un número entero positivo: ");
    while(numero=="" || isNaN(numero) || numero<0){
            numero = prompt("¡ERROR! Introduce un número entero positivo: ");
    }
    return numero;
}
var numero1 = pedirNumero();
console.log("Numero1: "+numero1);
var numero2 = pedirNumero();
console.log("Numero2: "+numero2);
var numero3 = pedirNumero();
console.log("Numero3: "+numero3);
if (numero1>numero2)
    if (numero1>=numero3)
    console.log("El mayor de "+numero1+", "+numero2+", "+numero3+" es "+numero1);
    else 
        console.log("El mayor de "+numero1+", "+numero2+", "+numero3+" es "+numero3);
else
    if (numero2>=numero3)
    console.log("El mayor de "+numero1+", "+numero2+", "+numero3+" es "+numero2);
    else
    console.log("El mayor de "+numero1+", "+numero2+", "+numero3+" es "+numero3);


console.log("El mayor de "+numero1+", "+numero2+", "+numero3+" es "+Math.max(numero1, numero2, numero3));