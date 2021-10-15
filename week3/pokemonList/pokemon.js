let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://pokeapi.co/api/v2/', true);
xhr.send();
xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
        let data = JSON.parse(xhr.responseText);
        getPokemonNames(data);
    } else if (xhr.readyState === 4 && xhr.status !== 200) {
        console.log(xhr.responseText);
    }
}

function getPokemonNames(data) {
    let pokemonNameEndpoint = data.pokemon;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', pokemonNameEndpoint, true);
    xhr.send();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let data = JSON.parse(xhr.responseText);
            postToDOM(data);
        } else if (xhr.readyState === 4 && xhr.status !== 200) {
            console.log(xhr.responseText);
        }
    }   
}

function postToDOM(data) {
    for (let i = 0; i < data.results.length; i++) {
        let div = document.createElement('div');
        let pokeName = document.createElement('h1');
        pokeName.textContent = `Name: ${data.results[i].name}`;
        pokeName.style.textAlign = 'center';
        let pokeHeight = document.createElement('h2');
        getPokemonInfo(data.results[i].url, pokeHeight);
        pokeHeight.style.textAlign = 'center';
        div.append(pokeName, pokeHeight);
        div.style.border = '2px solid black';
        div.style.margin = '10px';
        document.body.appendChild(div);
    }
}



function getPokemonInfo(url, pokeHeight) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.send();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let data = JSON.parse(xhr.responseText);
            pokeHeight.textContent = `Height: ${data.height}`;
        } else if (xhr.readyState === 4 && xhr.status !== 200) {
            console.log(xhr.responseText);
        }
    } 
    
}