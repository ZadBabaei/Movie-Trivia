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
