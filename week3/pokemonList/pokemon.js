function getData(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.send();
    xhr.onload = () => (xhr.status === 200) ? callback(xhr.response) : console.log(xhr.response);
    xhr.onerror = () => console.error(xhr.response);
}

getData('https://pokeapi.co/api/v2/', toArray);

function toArray(data) {
    let arr = Object.entries(data);
    let pokemon = arr[36][1];
    getData(pokemon, getPokemonNames);
}

function getPokemonNames(data) {
    let results = data.results;
    postToDOM(results);
}

function postToDOM(data) {
    for (let i = 0; i < data.length; i++) {
        let name = document.createElement('h1');
        name.textContent = data[i].name;
        let url = document.createElement('h2');
        url.textContent = data[i].url;
        document.body.append(name, url);
    }
}