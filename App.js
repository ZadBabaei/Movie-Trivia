let count = 2;
function nextHandeler() {
    let reza = document.getElementById("moviePoster")
    reza.src = `./assets/Imges/0${count}.jpg`
    count++
    console.log(reza);
}