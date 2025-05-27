const COUNT_URL = "https://api.counterapi.dev/v1";
const NAMESPACE = "mstromberg3.github.io";
const KEY = "7bf65b18-3b38-11f0-9fe2-0242ac120002";

const counter = document.querySelectorAll('span');

const getCount = async () => {
    const response = await fetch(`${COUNT_URL}/get/${NAMESPACE}/${KEY}`);
    const data = await response.json();
    setValue(data.value);
};

const incrementCount = async () => {
    const response = await fetch(`${COUNT_URL}/hit/${NAMESPACE}/${KEY}`);
    const data = await response.json();
    setValue(data.value);
};

const setValue = (num) => {
    var str = num.toString().padStart(6, "0");
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
