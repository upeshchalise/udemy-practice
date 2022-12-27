let counter_display = document.getElementById('count');
let inc = document.getElementById('inc');
let dec = document.getElementById('dec');
let clear = document.getElementById('clear');

let count = 0;

function increment() {
    count++;
    counter_display.innerHTML = count;
}


function decrement() {
    count--;
    counter_display.innerHTML = count;
}

function reset() {
    count = 0;
    counter_display.innerHTML = count;  
}