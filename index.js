function digitalClock() {
    const date = new Date();
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();

    document.getElementById("clock").textContent = hour + " : " + min + " : " + sec;
}

setInterval(digitalClock, 1000);