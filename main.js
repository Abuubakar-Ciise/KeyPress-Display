// const container = document.getElementById('container');
// container.style.border = '2px solid #4CAF50';
// container.style.padding = '30px';
// container.style.width = '60%';
// container.style.display = 'flex';
// container.style.flexDirection = 'column';
// container.style.alignItems = 'center';
// container.style.margin = '100px auto';
// container.style.justifyContent = 'center';
// container.style.borderRadius = '15px';
// container.style.backgroundColor = '#f4f4f9';

// const p = document.createElement('p');
// const box = document.createElement('div');

// p.textContent = 'Press any Keyboard Key';
// p.style.fontSize = '20px';
// p.style.fontWeight = '600';
// p.style.marginBottom = '20px';
// p.style.color = '#333';

// box.style.fontSize = '24px';
// box.style.fontWeight = 'bold';
// box.style.marginTop = '20px';
// box.style.padding = '10px 15px';
// box.style.backgroundColor = '#e8e8e8';
// box.style.borderRadius = '8px';
// box.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';

// document.body.addEventListener('keydown', e => {
//     const key = e.key === ' ' ? 'Space' : e.key;
//     const keyCode = e.keyCode || e.which;

//     const span = document.createElement('span');
//     span.textContent = key;
//     span.style.color = '#4CAF50';
//     span.style.fontSize = '24px';
//     span.style.fontWeight = 'bold';
//     span.style.marginLeft = '10px';

//     p.textContent = `You Pressed `;
//     p.appendChild(span);

//     box.textContent = `KeyCode: ${keyCode}`;
// });

// container.appendChild(p);
// container.appendChild(box);



document.body.addEventListener('keydown', e => {
    const key = e.key === ' ' ? 'Space' : e.key;
    const keyCode = e.keyCode || e.which;
    const keys = document.getElementById('key')
    const keycode = document.getElementById('keycode')
    keys.textContent = key;
    keycode.innerText = keyCode
});