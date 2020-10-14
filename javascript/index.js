import toggle from './bookmark'

document
    .querySelectorAll('.question-card__bookmark') 
    .forEach(element => {
        element.addEventListener('click', toggle)
    })