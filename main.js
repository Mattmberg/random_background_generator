const button = document.querySelector('button');
const colorCode = document.querySelector('h2');
const bckgrndEl = document.querySelector('section');

button.addEventListener('click', () => {
    let color = '#';
    color += Math.random().toString(16).slice(2,8);
    bckgrndEl.style.backgroundColor = color;
    colorCode.innerText = color;
})