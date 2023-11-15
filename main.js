const text = document.querySelector('.js-text'),
words = document.querySelector('.js-words'),
characters = document.querySelector('.js-characters'),
symbols = document.querySelector('.js-symbols');

text.addEventListener('input', () => {
    words.innerHTML = text.value.trim().split(/\s+/).length;
    //console.log(text.value);
    if(text.value.length ==0) {
        words.innerHTML = '0';
    }

    characters.textContent = text.value.length;

    symbols.textContent = text.value.split(/[!@#$%^&*[=+(){}:;'"<>.,?]/).length - 1 ;
});