document.querySelector('#getJokes').addEventListener('click', function() {
    axios.get('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=racist,sexist,explicit&amount=3')
        .then(response => funnyJokes(response.data))
        .catch(error => console.log(error))
});

function funnyJokes(data) {

    let li = document.createElement('li');
        li.textContent = data.jokes[0].setup
        let answer = document.createElement('li');
        answer.textContent = data.jokes[0].delivery;
        document.querySelector('#JOKE_DATA').append(li,answer);
}