export default function toggle(event) {
    event.target.parentElement
        .querySelectorAll('.question-card__bookmark')
        .forEach(element => {
            element.classList.toggle('question-card__bookmark--selected')
        })
}