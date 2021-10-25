document.querySelector('#getJokes').addEventListener('click', function() {
    axios.get('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=racist,sexist,explicit&amount=3')
        .then(response => funnyJokes(response.data))
        .catch(error => console.log(error))
});

function funnyJokes(data) {
    
    for (let i = 0; i < data.jokes.length; i++) {
        console.log('hello')
        if (data.jokes[i].setup != null) {
            let li = document.createElement('li');
            li.textContent = data.jokes[i].setup;
            let answer = document.createElement('li');
            answer.textContent = data.jokes[i].delivery;
            document.querySelector('#JOKE_DATA').append(li,answer);
        } else {
            console.log('goodbye')
            let li = document.createElement('li');
            li.textContent = data.jokes[i].joke;
            document.querySelector('#JOKE_DATA').appendChild(li);
        }
    }
}