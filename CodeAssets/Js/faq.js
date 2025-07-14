document.addEventListener('DOMContentLoaded', function () {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function () {
            const faqItem = this.closest('.faq-item');
            const answer = this.nextElementSibling;
            const toggle = this.querySelector('.faq-toggle');

            // Close all other open answers
            document.querySelectorAll('.faq-item.active').forEach(item => {
                if (item !== faqItem) {
                    item.classList.remove('active');
                    item.querySelector('.faq-answer').style.maxHeight = null;
                    item.querySelector('.faq-toggle').textContent = '+';
                }
            });

            // Toggle the clicked answer
            faqItem.classList.toggle('active');
            if (faqItem.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + "px"; // Set max-height to content height
                toggle.textContent = '-';
            } else {
                answer.style.maxHeight = null; // Collapse
                toggle.textContent = '+';
            }
        });
    });
});
