const navbar = document.querySelector('.navbar-stores');
const btnBuy = document.querySelector('#btn-buyNow');

btnBuy.addEventListener("click", () => {
    navbar.classList.toggle("open");
})