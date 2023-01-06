//variables

const day = document.getElementById("days")
const hour = document.getElementById("hours")
const minute = document.getElementById("minutes")
const second = document.getElementById("seconds")

//time-variables
let days = 10
let hours = 22
let minutes = 32
let seconds = 10

//contador

function countDown(){
    day.innerHTML = days;
    hour.innerHTML = hours;
    minute.innerHTML = minutes;
    second.innerHTML = seconds;

    if(seconds <= 9){
        second.innerHTML = '0' + seconds
    }
    if(minutes <= 9){
        minute.innerHTML = '0' + minutes;
    }
    if(hours <= 9){
        hour.innerHTML = '0' + hours;
    }
    if(days <= 9){
        day.innerHTML = '0' + days;
    }

    seconds--
    if(seconds <= 0){
        minutes--
        seconds = 59;
    } else if(minutes <= 0){
        minutes = 59
        hours--
    } else if(hours <= 0){
        hours = 23
        days--
    }
}

setInterval(countDown, 1000);