const affirmationContainer = document.getElementById("audio-affirmation");
const btn = document.getElementById("btn");

// Create a list of the audio clips
const clips = ["audio/10131.mp3", "audio/10761.mp3", "audio/22351.mp3", "audio/22371.mp3", "audio/22372.mp3", "audio/24411.mp3", "audio/24412.mp3", "audio/24421.mp3", "audio/24441.mp3", "audio/24451.mp3", "audio/24452.mp3", "audio/24461.mp3", "audio/24462.mp3", "audio/25031.mp3", "audio/34671.mp3"];

// get a random number and return that in array
let getAffirmation = () => {
    affirmationContainer.classList.remove("fade-out");
    const randomNumber = Math.floor(Math.random() * 15);
    const newClip = clips[randomNumber];
    affirmationContainer.innerHTML = "<audio controls autoplay><source src=" + newClip + " class='audio-affirmation' type='audio/mpeg'>Your browser does not support this audio element</audio>";
    affirmationContainer.classList.add("fade-in");
    console.log(randomNumber);
}


btn.addEventListener("click", getAffirmation);
getAffirmation();
