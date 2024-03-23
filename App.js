let count = 2;
function nextHandeler() {
    let reza = document.getElementById("moviePoster")
    reza.src = `./assets/Imges/0${count}.jpg`
    count++
    console.log(reza);
}




for ( let correctAnswers = 0 ;correctAnswers < 10; correctAnswers++) {   
    console.log('Wait starts');
    setTimeout(() => {
      console.log('Wait ends after 2 seconds');
      correctAnswers++;
      document.getElementById("correctAnswers").innerText = correctAnswers
    }, 2000); // 2000 milliseconds = 2 seconds
}


document.addEventListener('DOMContentLoaded', () => {
    const nextButton = document.querySelector('.btn'); // The next button
    let countdownNumber = 10; // Starting number for countdown
    const countdownElement = document.querySelector('.leftSection h1'); // The element where the countdown is displayed

    // Function to start the countdown
    function startCountdown() {
        countdownElement.textContent = countdownNumber; // Update the display with the current countdown number

        const countdownTimer = setInterval(() => {
            countdownNumber--; // Decrease the countdown number by 1
            countdownElement.textContent = countdownNumber; // Update the display with the new countdown number

            if (countdownNumber <= 0) {
                clearInterval(countdownTimer); // Stop the countdown when it reaches 0
                countdownNumber = 10; // Reset the countdown number for the next question
            }
        }, 1000); // Set the interval to 1 second (1000 milliseconds)
    }

    // Event listener for the next button
    nextButton.addEventListener('click', () => {
        startCountdown(); // Start the countdown when the next button is clicked
    });
});
