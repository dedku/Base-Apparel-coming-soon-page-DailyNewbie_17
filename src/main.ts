export const input = document.getElementById('input') as HTMLInputElement
export const button = document.getElementById('btn') as HTMLButtonElement
const error = document.getElementById('error') as HTMLDivElement

button.addEventListener('click', (e) => {
    e.preventDefault();
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g as RegExp
    const inputValue = input.value.length > 0 as boolean
    const verifieEmail = input.value.match(regex) as RegExpMatchArray | null
    if (!inputValue) {
        error.innerHTML = `Email field is empty`
    }
    if (inputValue && !verifieEmail) {
        error.innerHTML = `Please provide a valid email address`
    }
    if (verifieEmail) {
        error.innerHTML = ``
    }
})