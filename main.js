const CAT_URL = 'https://api.thecatapi.com/v1/images/search'
const DOG_URL = 'https://api.thedogapi.com/v1/images/search'
const alert = document.querySelector(".alert-container")
const loading = document.querySelector('#loading')

function continuarButton () {
    alert.classList =+ " disable"
    alert.innerHTML = ""
}

function startLoading () {
    loading.style = 'visibility: visible;'
}

function stopLoading () {
    loading.style = ''
}

async function getAndPrintImage (URL) {
    //startLoading()
    const res = await fetch(URL)
    .catch(err => console.log(err, "image not found"))
    const data = await res.json()
    const img = document.querySelector(".kitty");
    img.src = data[0].url;
    //stopLoading()
    // .catch(err => console.log(err))
}

function awa () {
    console.log("load")
}

let api_url

function chooseApi () {
    if(Math.random() < 0.5) {
        api_url = CAT_URL
    } else {
        api_url = DOG_URL
    }
}

function changeImg () {
    chooseApi()
    getAndPrintImage (api_url)
}

chooseApi()
changeImg()