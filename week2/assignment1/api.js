//This was a useful resource to figure out to use JSON DATA in a js file: 
//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

const api_Data = {
    "name": "C-3PO", 
    "height": "167", 
    "mass": "75", 
    "hair_color": "n/a", 
    "skin_color": "gold", 
    "eye_color": "yellow", 
    "birth_year": "112BBY", 
    "gender": "n/a", 
    "homeworld": "https://swapi.dev/api/planets/1/", 
    "films": [
        "https://swapi.dev/api/films/1/", 
        "https://swapi.dev/api/films/2/", 
        "https://swapi.dev/api/films/3/", 
        "https://swapi.dev/api/films/4/", 
        "https://swapi.dev/api/films/5/", 
        "https://swapi.dev/api/films/6/"
    ], 
    "species": [
        "https://swapi.dev/api/species/2/"
    ], 
    "vehicles": [], 
    "starships": [], 
    "created": "2014-12-10T15:10:51.357000Z", 
    "edited": "2014-12-20T21:17:50.309000Z", 
    "url": "https://swapi.dev/api/people/2/"
}

for (key in api_Data) {
    let entry = document.createElement('h4');
    entry.innerText = `${key}: ${api_Data[key]}`;
    document.body.appendChild(entry);
}