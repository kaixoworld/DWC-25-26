document.getElementsByTagName("button")[0].addEventListener("click", ()=>{
    let url = "https://randomuser.me/api/?results=5";
    fetch(url)
    .then((response) =>{
        return response.json();
    })
    .then((usuarios)=>{
        console.log(usuarios);
        const usuario = usuarios['results'][0];
        document.getElementById("avatar").src= usuario.picture.medium;
        document.getElementById("fullname").innerHTML = usuario.name.first + " " + usuario.name.last;
        document.getElementById("username").innerHTML = usuario.login.username;
        document.getElementById("email").innerHTML = usuario.email;
        document.getElementById("city").innerHTML = usuario.location.city;
    });
});