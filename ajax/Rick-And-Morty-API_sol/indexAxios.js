const API = {
    "characters": "https://rickandmortyapi.com/api/character/"
};    


let queryData = '';



document.getElementById("search-button").onclick = ()=>{
  document.getElementsByClassName("result")[0].innerHTML="";
    queryData = document.getElementById('search-bar').value;
    document.getElementById('search-bar').value="";
    
    axios.get(API.characters, {
      responseType: 'json'
    })
      .then(function(res) {
        if(res.status==200) {
         console.log(res.data.results);
          for (let value of res.data.results){
            console.log(value.name+"----"+queryData+"---"+value.name.indexOf(queryData));
            if ((queryData=='')||(value.name.indexOf(queryData)!=-1)){   
                let elem = document.createElement("div");
                elem.className += 'card';
                let img = document.createElement("img");
                let a = document.createAttribute("src");
                a.value = value.image;
                img.setAttributeNode(a);
                let name = document.createElement("span");
                name.textContent=value.name;
                name.className += 'card-title';
                elem.appendChild(img);
                elem.appendChild(name);
                document.getElementsByClassName("result")[0].appendChild(elem);
            }
          }
        }
      })
      .catch(function(err) {
        console.log('Error de conexión ' + err);
      })


};

