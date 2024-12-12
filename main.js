document.body.addEventListener('keydown', e => {
    const key = e.key === ' ' ? 'Space' : e.key;
    const keyCode = e.keyCode || e.which;
    const h1 = document.getElementById('h1')
    const keys = document.getElementById('key')
    const keycode = document.getElementById('keycode')
    const span = document.createElement('span')
    // keys.innerText = key
    h1.textContent =`You pressed `;
    span.innerText = key
    keycode.innerText = keyCode
    h1.appendChild(span)
});
