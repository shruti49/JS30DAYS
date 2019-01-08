const shand = document.querySelector('.second-hand');
const mhand = document.querySelector('.min-hand');
const hhand = document.querySelector('.hour-hand');

function setDate() {

    const time = new Date();
    //getting seconds from date
    const secs = time.getSeconds();
    //converting seconds into degrees
    const sec_deg = ((secs / 60) * 360) + 90;
    //applying styles to the hand
    shand.style.transform = `rotate(${sec_deg}deg)`;
    shand.style.backgroundColor = "red";


    //getting minutes from date
    const mins = time.getMinutes();
    //converting minutes into degrees
    const min_deg = ((mins / 60) * 360) + 90;
    //applying styles to the hand
    mhand.style.transform = `rotate(${min_deg}deg)`;


    //getting hour from date
    const hours = time.getHours();
    //converting hours into degrees
    const hr_deg = ((hours / 12) * 360) + 90;
    //applying styles to the hand
    hhand.style.transform = `rotate(${hr_deg}deg)`;
}

setInterval(setDate, 1000);