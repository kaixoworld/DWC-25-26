const PASSWORD_CORRECTA = "1234";
function pedirPassword(){
    return prompt("Introduce tu contraseña: ");
}
var passwordUsuario = pedirPassword();
while (passwordUsuario != PASSWORD_CORRECTA){
    alert("Contraseña Incorrecta!");
    passwordUsuario = pedirPassword();
}
alert("¡Te doy la bienvenida!");
 