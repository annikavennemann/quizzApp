export default function toggle(event) {
    event.target.parentElement
        .querySelectorAll('.question-card__answer')
        .forEach(element => {
            element.classList.toggle('question-card__answer--hidden')
        })
}