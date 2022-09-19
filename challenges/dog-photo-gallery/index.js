let btnAdd = document.getElementById('add');
let list = document.getElementsByClassName('container')[0];
btnAdd.addEventListener('click', () => {
    getImage()
});
function getImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let item = document.createElement('li');
            item.innerHTML = `<img src = '${data.message}'/>`;
            list.appendChild(item);

        })
        .catch((error) => console.log(error));
}

