let buttonOpenNav = window.document.querySelector('.close_nav--icon');
let buttonCloseNav = window.document.querySelector('.opened_nav--icon');

function openNav() {
    document.querySelector('container_nav--opened').style.width = "40%";
}

function closeNav() {
    document.querySelector('container_nav--opened').style.width = "0%";
}

buttonOpenNav.onclick = () => {
    openNav();
}

buttonCloseNav.onclick = () => {
    closeNav();
}