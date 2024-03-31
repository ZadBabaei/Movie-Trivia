let count = 2;
function nextHandeler() {
    let reza = document.getElementById("moviePoster")
    reza.src = `./assets/Imges/0${count}.jpg`
    count++
    console.log(reza);
}
function startHandler() {
    document.getElementById("container").style.visibility = "visible"
}
document.addEventListener('DOMContentLoaded', () => {
    const nextButton = document.querySelector('.btn');
    let countdownNumber = 10; 
    const countdownElement = document.querySelector('.leftSection h1'); 


    function startCountdown() {
        countdownElement.textContent = countdownNumber; 

        const countdownTimer = setInterval(() => {
            countdownNumber--; 
            countdownElement.textContent = countdownNumber; 

            if (countdownNumber <= 0) {
                clearInterval(countdownTimer); 
                countdownNumber = 10; 
            }
        }, 1000); 
    }


    nextButton.addEventListener('click', () => {
        startCountdown(); 
    });
});
