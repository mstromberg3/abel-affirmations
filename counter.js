const COUNT_URL = "https://api.counterapi.dev/v1";
const NAMESPACE = "mstromberg3.github.io";
const KEY = "CountingTheVisits";

const counter = document.querySelectorAll('span');

const getCount = async () => {
    const response = await fetch(`${COUNT_URL}/${NAMESPACE}/${KEY}`);
    const data = await response.json();
    setValue(data.value);
};

const incrementCount = async () => {
    const response = await fetch(`${COUNT_URL}/${NAMESPACE}/${KEY}/up`);
    const data = await response.json();
    setValue(data.value);
};

const setValue = (num) => {
    var str = num.toString().padStart(4, "0");
    for (let index = 0; index < str.length; index++) {
        const element = str[index];
        counter[index].innerHTML = element;
    }
};

if (localStorage.getItem("hasVisited") == null) {
    incrementCount()
        .then(() => {
            localStorage.setItem("hasVisited", "true");
        })
        .catch((err) => console.log(err));
} else {
    getCount()
        .catch((err) => console.log(err));
}
