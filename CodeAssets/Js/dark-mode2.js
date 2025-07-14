const button = document.getElementById('darkModeButton');
const text = button.querySelector('p');

let isDark = false;

button.addEventListener('click', function () {
    isDark = !isDark;

    if (isDark) {
        text.textContent = 'Light Mode';
        button.classList.add('swapped');
    } else {
        text.textContent = 'Dark Mode';
        button.classList.remove('swapped');
    }
});
