setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
    const currentDate = new Date()
    const secondsRaito = currentDate.getSeconds() /60
    const minutesRaito = (secondsRaito + currentDate.getMinutes()) /60
    const hoursRaito = (minutesRaito + currentDate.getHours()) / 12
    setRotation(secondHand, secondsRaito)
    setRotation(minuteHand, minutesRaito)
    setRotation(hourHand, hoursRaito)
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock();