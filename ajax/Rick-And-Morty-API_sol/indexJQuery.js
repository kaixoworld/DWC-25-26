
const API = {
    "characters": "https://rickandmortyapi.com/api/character/"
};    


let queryData = '';



$('#search-button').on('click', () => {
    queryData = $('#search-bar').val();
    $('#search-bar').val('');

    api_request(API.characters, {
        name: queryData
    });
});


function api_request(url, data = {}) {
    $.get({
        url: API.characters,
        data: data,
        success: (res) => {
            $('.result').html('');
            console.log(res);
            for(let [clave, value] of Object.entries(res.results)) {
                let elem = $('<div>');
                elem.addClass('card');
                let img = $('<img>');
                img.attr('src', value.image);
                let name = $('<span>');
                name.text(value.name);
                name.addClass('card-title');
                elem.append(img);
                elem.append(name);
                $('.result').append(elem);
            }
            $('html').scrollTop(0);
        }
    })
}