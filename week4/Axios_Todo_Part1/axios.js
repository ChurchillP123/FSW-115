axios.get('http://api.bryanuniversity.edu/churchill_perry/list')
    .then(response => createToDo(response.data))
    .catch(error => console.log(error))


function createToDo(data) {
    for (let i = 0; i < data.length; i++) {
        let item = document.createElement('li');
        item.textContent = data[i].description;
        document.querySelector('#myOL').appendChild(item);
    }
}

