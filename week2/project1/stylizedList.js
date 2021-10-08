const ISS_API = {
    "message": "success",
    "number": 10,
    "people": [
        {
            "craft": "ISS",
            "name": "Mark Vande Hei"
        },
        {
            "craft": "ISS",
            "name": "Oleg Novitskiy"
        },
        {
            "craft": "ISS",
            "name": "Pyotr Dubrov"
        },
        {
            "craft": "ISS",
            "name": "Thomas Pesquet"
        },
        {
            "craft": "ISS",
            "name": "Megan McArthur"
        },
        {
            "craft": "ISS",
            "name": "Shane Kimbrough"
        },
        {
            "craft": "ISS",
            "name": "Akihiko Hoshide"
        },
        {
            "craft": "ISS",
            "name": "Anton Shkaplerov"
        },
        {
            "craft": "ISS",
            "name": "Klim Shipenko"
        },
        {
            "craft": "ISS",
            "name": "Yulia Pereslid"
        }
    ]
}

let numOfAstronauts = document.createElement('h1');
numOfAstronauts.textContent = `There are currently ${ISS_API.number} Astronauts in space.`;
document.body.appendChild(numOfAstronauts);

let oList = document.createElement('ol');
for (person of ISS_API.people) {
    oList.innerHTML += `<li>Craft: ${person.craft}, Name: ${person.name}</li>`;
}
document.body.appendChild(oList);


