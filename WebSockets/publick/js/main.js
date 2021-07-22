const socket = new WebSocket('ws://localhost:3000');

const form = document.forms.test;
form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const formData = new FormData(ev.target);  
    const num = formData.get('num');
    socket.send(num)
})

// socket.addEventListener('open', (ev) => {
//     socket.send('Hellow Server!!')
// });

socket.addEventListener('message', (ev) => {
    console.log('Message from server', ev.data);
});