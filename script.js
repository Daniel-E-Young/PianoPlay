const keyboardKeys = document.querySelectorAll(".piano-keys .key"),
volumeSlider = document.querySelector(".volume-slider input")
keysCheckbox = document.querySelector(".keys-checkbox input");

let allKeys = [],
audio = new Audio("tunes/a.wav"); // by default, audio src will be the "a" tune

const playTune = (key) => {
    audio.src = 'tunes/${key}.wav' // passing audio src based on keys pressed
    audio.play(); // play audio


    const clickedKey = document.querySelector('[data-key="${key}"]') // getting clicked key elements
    clickedKey.classList.add("active"); //add advite class to the clicked key element
    setTimeout(())
}
