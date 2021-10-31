axios.get('http://api.bryanuniversity.edu/churchill_perry/list')
    .then(response => createToDo(response.data))
    .catch(error => console.log(error))

function createToDo(data) {
    for (let i = data.length - 1; i >= 0; i--) {
        let item = document.createElement('li');
        item.textContent = data[i].description;
        item.setAttribute('id', data[i]._id);
        let checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        item.appendChild(checkbox);
        item.appendChild(deleteButton);
        document.querySelector('#oList').appendChild(item);
        checkbox.addEventListener('click', e => {
            let parentNode = e.target.parentNode;
            if (e.target.checked) {
                parentNode.style.textDecoration = 'line-through';
                axios.put(`http://api.bryanuniversity.edu/churchill_perry/list/${parentNode.id}`, {isComplete: true})
                    .then(res => console.log(res))
                    .catch(err => console.log(err))
            } else {
                e.target.parentNode.style.textDecoration = 'none';
                axios.put(`http://api.bryanuniversity.edu/churchill_perry/list/${parentNode.id}`, {isComplete: false})
                    .then(res => console.log(res))
                    .catch(err => console.log(err))
            }
        });
        deleteButton.addEventListener('click', (e) => {
            let toDelete = e.target.parentNode;
            axios.delete(`http://api.bryanuniversity.edu/churchill_perry/list/${toDelete.id}`)
                .then(res => console.log(res))
                .catch(err => console.log(err))
        });
    }
}

const todoForm = document.requestForm;
todoForm.addEventListener('submit', e => {
    e.preventDefault();
    const newTodo = {
        name: todoForm.title.value,
        price:todoForm.price.value,
        description: todoForm.description.value,
        isComplete: false
    }
    axios.post('http://api.bryanuniversity.edu/churchill_perry/list', newTodo)
        .then(res => console.log(res))
        .catch(err => console.log(err))
});





