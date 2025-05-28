const increaseButton = document.getElementById("counterIncrease");
const decreaseButton = document.getElementById("counterDecrease");
const resetButton = document.getElementById("counterReset");
const counter = document.getElementById("numberCounter");

let count = 0;

increaseButton.onclick = function() {
    count++;
    counter.textContent = count;
}

decreaseButton.onclick = function() {
    count--;
    counter.textContent = count;
}

resetButton.onclick = function() {
    count = 0;
    counter.textContent = count;
}