// { "month": "9", "num": 2673, "link": "", "year": "2022", "news": "", "safe_title": "Cursed mRNA Cocktail", "transcript": "", "alt": "Serve one each to guests whose last cursed cocktail was more than 2 months ago.", "img": "https://imgs.xkcd.com/comics/cursed_mrna_cocktail.png", "title": "Cursed mRNA Cocktail", "day": "16" }

let div = document.querySelector('.container');
let button = document.getElementById('btn');

button.addEventListener('click', () => {
    getJoke()
});


function getJoke() {
    fetch(`https://xkcd.now.sh/?comic=latest`)
        .then(function (response) {
            return response.json();
        })
        .then((data) => {
            div.innerHTML = `<img src="${data.img}"/>`;
            console.log(data);
        });
        .catch ((error) => console.log('error'));

}
