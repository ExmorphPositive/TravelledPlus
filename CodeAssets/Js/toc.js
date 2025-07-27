document.querySelectorAll('.list-main-heading a span').forEach((span) => {
    const fullText = span.textContent.trim();
    if (fullText.length > 30) {
        span.textContent = fullText.substring(0, 30) + '...';
    }
});

// Toggle sub-headings
document.querySelectorAll('.list-main-heading').forEach((heading) => {
    heading.addEventListener('click', () => {
        const subHeading = heading.parentElement.querySelector('.list-sub-heading');
        if (subHeading) {
            subHeading.style.display = subHeading.style.display === 'none' ? 'block' : 'none';
        }
    });
});

// Hide all sub-headings initially
document.querySelectorAll('.list-sub-heading').forEach((el) => {
    el.style.display = 'none';
});