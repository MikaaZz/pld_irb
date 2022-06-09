let buttonOpenNav = window.document.querySelector('.close_nav--icon');
let buttonCloseNav = window.document.querySelector('.opened_nav--icon');
let containerOpened = window.document.querySelector('.container_nav--opened');

buttonOpenNav.onclick = () => {
    containerOpened.classList.remove("close");
    containerOpened.classList.add("open");
}

buttonCloseNav.onclick = () => {
    containerOpened.classList.remove("open");
    containerOpened.classList.add("close");
}