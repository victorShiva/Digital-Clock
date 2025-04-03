function updateClock() {
    const timeElement = document.querySelector('.time');
    const dateElement = document.querySelector('.date');

    const now = new Date();
    const hours = (now.getHours() % 12 || 12).toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const ampm = now.getHours() >= 12 ? 'PM' : 'AM';

    timeElement.textContent = `${hours}:${minutes}:${seconds} ${ampm} `;

    const options = {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
        weekday: 'short'
    }

    const date = now.toLocaleDateString("en-in", options)

    setTimeout(() => {
        dateElement.textContent = date;
    }, 500)
}

setInterval(updateClock, 1000);
updateClock();