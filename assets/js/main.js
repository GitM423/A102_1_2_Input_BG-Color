let body = document.getElementById('body')
let input = document.getElementById('input')


function changeColor() {
    body.style.background = (input.value)
}

input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault()
        document.getElementById("senden").click()
    }
})