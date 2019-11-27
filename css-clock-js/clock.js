const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90; // the plus 90 is to offset the default from the .css so it starts pointing at 12
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) +90;
    minHand.style.transform = `rotate(${minutesDegrees}deg)`

    const hours = now.getHours();
    const hourDegrees = ((hours / 12) * 360) +90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`

console.log(seconds, minutes, hours)
    
}
setInterval(setDate,1000);