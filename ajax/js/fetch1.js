document.getElementsByTagName("button")[0].addEventListener("click", ()=>{
    let url = "https://randomuser.me/api/?results=5";
    fetch(url)
    .then((response) =>{
        return response.json();
    })
    .then((usuarios)=>{
        console.log(usuarios);
        document.getElementById("resultado").value = usuarios['results'][0]['name']['first'] ;
    });
});