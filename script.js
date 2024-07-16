let timer;
let seconds = 0;

document.getElementById('startButton').addEventListener('click', () => {
    clearInterval(timer);
    seconds = 0;
    document.getElementById('timer').textContent = formatTime(seconds);
    timer = setInterval(() => {
        seconds++;
        document.getElementById('timer').textContent = formatTime(seconds);
    }, 1000);
});

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}
