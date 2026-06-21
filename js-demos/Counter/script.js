startCounter();

function startCounter() {
   
    let count = 0; 

    const countDisplay = document.getElementById('count-display');
    const incrementBtn = document.getElementById('btn-increment');
    const decrementBtn = document.getElementById('btn-decrement');

    incrementBtn.addEventListener('click', function() {
        count++;
        countDisplay.textContent = count;
    });

    decrementBtn.addEventListener('click', function() {
        count--;
        countDisplay.textContent = count;
    });
}