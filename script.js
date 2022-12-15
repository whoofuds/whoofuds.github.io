let navigator = document.querySelector('.navigator');

document.querySelector('#menu-btn').onclick = () =>{
    navigator.classList.toggle('active');
    searchform.classList.remove('active');
}
let searchform = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchform.classList.toggle('active');
    navigator.classList.remove('active');
}
