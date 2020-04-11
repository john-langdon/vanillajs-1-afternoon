const idInput = document.getElementById('idInput');
const colorInput = document.getElementById('colorInput')

function reset() {
    localStorage.reload();
}

function setCard() {
    const card = document.getElementById(idInput.value);
    card.style.color = colorInput.value;
}