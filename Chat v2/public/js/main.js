const socket = io();

const form = document.querySelector('.form');
const messages = document.querySelector('.messages');
const input = document.querySelector('.input');
const nameBlock = document.querySelector('.name');

const userName = prompt('Ваше имя:')
nameBlock.innerHTML = `${userName}`

form.addEventListener('submit', (ev) => {
    ev.preventDefault();

    if ( input.value ) {
        socket.emit('chat message', { 
            message: input.value, 
            name: userName 
        });
        input.value = ``;
    }
})

socket.on('chat message', (data) => {
    const item = document.createElement('li')
    item.innerHTML = `<span>${data.name}</span>: ${data.message}`
    messages.appendChild(item)
    window.scrollTo(0,document.body.scrollHeight)
})
