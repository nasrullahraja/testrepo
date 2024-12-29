function changeColor() {
    const message = document.getElementById('message');
    const colors = ['red', 'blue', 'green', 'purple', 'orange'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    message.style.color = randomColor;
}
