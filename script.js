const keyboardKeys = document.querySelectorAll(".piano-keys .key"),
volumeSlider = document.querySelector(".volume-slider input"),
keysCheckbox = document.querySelector(".keys-checkbox input");

let allKeys = [],
audio = new Audio("tunes/a.wav");

const  playTune = (key) => {
    audio.src = `tunes/${key}.wav` // passing audio src based on keys pressed
    audio.play(); 
    

    const clickedKey = document.querySelector(`[data-key="${key}"]`) // getting clicked key elements
    clickedKey.classList.add("active"); 
    setTimeout(() => { 
        clickedKey.classList.remove("active");
    }, 150);
};

keyboardKeys.forEach(key => {
    allKeys.push(key.dataset.key); 
    key.addEventListener("click", () => playTune(key.dataset.key));
    console.log(key.dataset.key)
});

const handleVolume = (e) => {
    audio.volume = e.target.value; 
}

const showHideKeys = () => {
    keyboardKeys.forEach( key => key.classList.toggle("hide"))
}

const pressedKey = (e) => {
    if(allKeys.includes(e.key)) playTune(e.key);
};

keysCheckbox.addEventListener("click", showHideKeys);
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);
