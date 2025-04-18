const affirmationContainer = document.getElementById("video-affirmation");
const btn = document.getElementById("btn");

// Create a list of the videos
const videos = [];

// loop to add each video to array
let i = 0;

while (i < 5) {
    videos[i] = ("images/vid_" + (i + 1) + ".mov");
    i++;
}

// get a random number and return that in array
let getAffirmation = () => {
    affirmationContainer.classList.remove("fade-out");
    const randomNumber = Math.floor(Math.random() * 5);
    const newVideo = videos[randomNumber];
    affirmationContainer.innerHTML = "<video width='240' height='320' autoplay>
  <source src=" + newVideo + " type='video/mov'>Your browser does not support this video</video>";
    affirmationContainer.classList.add("fade-in");
    console.log(randomNumber);
}

btn.addEventListener("click", getAffirmation);
getAffirmation();
