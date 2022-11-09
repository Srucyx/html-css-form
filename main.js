const inputs = document.querySelectorAll('input');
const button = document.querySelector('#btn');

function validate() {
    inputs.forEach(input => {
        if(input.value.length < 2) {
            console.log('muy corto!');
        }
    })
}

button.addEventListener('click', (e) => {
    e.preventDefault();
    validate();
})