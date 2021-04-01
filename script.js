const questions = document.querySelectorAll('.question-title');

questions.forEach((question) => {
    question.addEventListener('click', ()=> {
        const height = question.nextElementSibling.scrollHeight;
        console.log(height);
        question.classList.toggle('active-header');
        if(question.classList.contains('active-header')) {
            question.nextElementSibling.style.maxHeight = `${height}px`;
        } else {
            question.nextElementSibling.style.maxHeight = '0px';
        }
    })
});