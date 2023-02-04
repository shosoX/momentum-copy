const clock = document.querySelector('h1#time')

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minute =  String(date.getMinutes()).padStart(2, "0");
    clock.innerText = (`${hours}:${minute}`)
}

getClock();
setInterval(getClock, 1000)