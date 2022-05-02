const URL = 'https://api.thecatapi.com/v1/images/search'
const alert = document.querySelector(".alert-container")

function continuarButton () {
    alert.classList =+ " disable"
    alert.innerHTML = ""
}

function changeImg () {
    fetch(URL)
    .then(res => res.json())
    .then(data => {
        const img = document.querySelector(".kitty");
        img.src = data[0].url;
    })
    .catch(err => console.log(err))
}

changeImg()