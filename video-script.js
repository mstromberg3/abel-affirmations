const affirmationContainer = document.getElementById("video-affirmation");
const btn = document.getElementById("btn");

// Create a list of the videos
const videos = [];

// loop to add each video to array
let i = 0;

while (i < 4) {
    videos[i] = ("images/vid_" + (i + 1) + ".mov");
    i++;
}

// get a random number and return that in array
let getAffirmation = () => {
    affirmationContainer.classList.remove("fade-out");
    const randomNumber = Math.floor(Math.random() * 4);
    const newVideo = videos[randomNumber];
    affirmationContainer.innerHTML = "<img src='" + newVideo + "' class='affirmation'/>";
    affirmationContainer.classList.add("fade-in");
    console.log(randomNumber);
}

btn.addEventListener("click", getAffirmation);
getAffirmation();
