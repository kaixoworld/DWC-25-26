let arPalabrasIngles = new Array("house", "table", "dog", "cat");
let palabra;
do{
    palabra = prompt("Introduce palabra: ");
    if(palabra != "salir"){
        let index= -1;
        switch(palabra){
            case "casa": index=0;break;
            case "mesa": index=1;break;
            case "perro": index=2;break;
            case "gato": index=3;break;
            default: alert("PALABRA NO VÁLIDA!");
        };
        if(index !=-1)
            alert(palabra+ " EN INGLÉS ES "+arPalabrasIngles[index]);
    }else
        alert("AGURRRRR");
}while (palabra != "salir");
