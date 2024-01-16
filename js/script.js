let allElement = document.querySelector('.js-all-link');
let subAllElement = document.querySelector('.js-sub-all');
let closeElement = document.querySelector('.js-close');
console.log(allElement);


allElement.onclick = function(e){
    e.preventDefault();
    subAllElement.classList.remove('none');
}

closeElement.onclick = function(e){
    e.preventDefault();
    subAllElement.classList.add('none');
}

