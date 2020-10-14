import toggle from './card-toggle-answer'

document
    .querySelectorAll('.question-card__button') // bookmark-class
    .forEach(element => {
        element.addEventListener('click', toggle)
    })


{/* <p class="question-card__answer question-card__answer--hidden">This is the hidden answer</p>  --- zeile nach bookmark*/}
    