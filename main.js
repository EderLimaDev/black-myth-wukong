const navbar = document.querySelector('.sidebar-stores');
const btnBuy = document.querySelector('#btn-buyNow');

btnBuy.addEventListener("click", () => {
    navbar.classList.toggle("open");
})

const cardImages = document.querySelector('.card-images');
const cardItem = document.querySelector('.card-images img');

let count = 1;

function carrossel() {
    count++
    if(count > 4) {
        count = 1;
    }
    let imgSource = `./assets/imgs/slide-${count}.png`
    cardItem.setAttribute("src", imgSource);

}

setInterval(carrossel, 3000);