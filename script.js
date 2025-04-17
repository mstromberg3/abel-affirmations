const affirmationContainer = document.getElementById("affirmation");
const btn = document.getElementById("btn");

// Create a list of the images
const images = [];

// loop to add each image to array
let i = 0;

while (i < 24) {
    images[i] = ("images/Layer" + (i + 2) + ".png");
    i++;
}

// get a random number and return that in array
let getAffirmation = () => {
    affirmationContainer.classList.remove("fade-out");
    const randomNumber = Math.floor(Math.random() * 24);
    const newImage = images[randomNumber];
    affirmationContainer.innerHTML = "<img src='" + newImage + "' class='affirmation'/>";
    affirmationContainer.classList.add("fade-in");
    console.log(randomNumber);
}

btn.addEventListener("click", getAffirmation);
getAffirmation();