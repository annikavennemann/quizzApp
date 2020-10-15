import toggle1 from './bookmark'
import toggle2 from './card-toggle-answer'

document
    .querySelectorAll('.question-card__bookmark') 
    .forEach(element => {
        element.addEventListener('click', toggle1)
    })

document
    .querySelectorAll('.question-card__button')
    .forEach(element => {
        element.addEventListener('click', toggle2)
    })