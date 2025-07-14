const button = document.getElementById('darkModeButton');
const main = document.querySelector('main');
const h1 = main.querySelector('h1');
const text = button.querySelector('p');

let isDark = false;

button.addEventListener('click', function () {
    isDark = !isDark;

    if (isDark) {
        main.style.backgroundColor = 'black';
        h1.style.color = '#cccccc';
        text.textContent = 'Light Mode';
        button.classList.add('swapped');
    } else {
        main.style.backgroundColor = 'white';
        h1.style.color = '#2e2e2e';
        text.textContent = 'Dark Mode';
        button.classList.remove('swapped');
    }
});
