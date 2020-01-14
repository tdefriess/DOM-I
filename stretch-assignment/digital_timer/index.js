let tens = document.getElementById('secondTens');
let ones = document.getElementById('secondOnes');
let hundreds = document.getElementById('msHundreds');
let msTens = document.getElementById('msTens');

let counter = 0
function myTimer(){    
    counter++;
    msTens.textContent = Math.floor((counter % 100)/10);
    hundreds.textContent = counter % 10;
    ones.textContent = Math.floor((counter % 1000)/100);
    tens.textContent = Math.floor((counter % 10000) / 1000);    
}

var timer = window.setInterval(myTimer, 10);

let digits = document.getElementsByClassName('digit');
setTimeout(() => {clearInterval(timer);
    for (let i = 0; i<5; i++){
        digits[i].classList.add('redDigit');
    }
}, 10025);
