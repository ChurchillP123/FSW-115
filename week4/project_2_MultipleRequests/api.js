/*const requestOne = axios.get('http://api.open-notify.org/iss-now.json');
const requestTwo = axios.get('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=racist,sexist,explicit&amount=3');
axios.all([requestOne, requestTwo]).then(axios.spread((...responses) => {
    addISS(responses[0].data)
    addJokes(responses[1].data)
})).catch(errors => {
    console.log(errors);
});

*/

function addISS(data) {
    let uList = document.querySelector('#ISS_DATA');
    let longitude = document.createElement('li');
    let latitude = document.createElement('li');
    longitude.textContent = 'Current Longitude: ' + data.iss_position.longitude; 
    latitude.textContent = 'Current Latitude: ' + data.iss_position.latitude; 
    uList.append(longitude,latitude);
}

document.querySelector('#submit').addEventListener('click', function(){
    axios.get('http://api.open-notify.org/iss-now.json')
        .then(response => addISS(response.data))
        .catch(error => console.log(error))
});

