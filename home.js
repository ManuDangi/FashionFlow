document.querySelectorAll('.faq-question').forEach((button) => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            document.querySelectorAll('.faq-answer').forEach((item) => item.style.display = 'none');
            answer.style.display = 'block';
        }
    });
});

