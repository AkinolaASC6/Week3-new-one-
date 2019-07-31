const button = document.querySelector("#submitButton")

button.addEventListener(click, clicklistener)

function clickListener(event) {
    event.preventDefault()
    const inputElement = querySelector("#username")
    console.log(inputElement)
    const userInput = inputElement.value
    alert(userInput)
}