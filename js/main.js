function createElements(amount) {
    for (let index = 0; index < amount; index++) {
        const element = document.createElement('div');
        element.classList.add('card');
        element.style.width = `${Math.floor(Math.random() * 200) + 50}px`;
        element.style.height = `${Math.floor(Math.random() * 200) + 50}px`;
        document.body.appendChild(element);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    createElements(100);
});