const inputBox = document.getElementById("auto-suggest");
const autoSuggestionBox = document.getElementById("auto-suggest-box");
const autoSuggestions = document.getElementsByClassName("auto-suggest-item");

const excludeClassNames = ["auto-suggest-box", "input"]



const handleFocus = () => autoSuggestionBox.classList.remove("hide-auto-box")
const handleBlur = (event) => {
    console.log({event});
    
autoSuggestionBox.classList.add("hide-auto-box")
} 

const handleChange = (event) => {
const inputVal = event.target.value;

getSuggestions(inputVal).then((response) => {
    (response || []).forEach((data) => { 
        const searchSuggestion = document.createElement("p");
        searchSuggestion.innerText = data
        searchSuggestion.classList.add("auto-suggest-item");
        autoSuggestionBox.appendChild(searchSuggestion)
    })
})
}

const handleAutoSuggestionBoxClick = (event) => {
    event.preventDefault();
    const targetElement = event.target;
    inputBox.value = targetElement.innerText
}

const handleWindowClick = (event) => {
   const isOutDetected = !excludeClassNames.includes(event.target.className);
   if(isOutDetected) autoSuggestionBox.classList.add("hide-auto-box");
}
window.addEventListener("click", handleWindowClick)
autoSuggestionBox.addEventListener("click", handleAutoSuggestionBoxClick)
inputBox.addEventListener("focus", handleFocus)
inputBox.addEventListener("input", handleChange)








// Mock Server
const FAILURE_COUNT = 10;
const LATENCY = 200;

function getRandomBool(n) {
  const threshold = 1000;
  if (n > threshold) n = threshold;
  return Math.floor(Math.random() * threshold) % n === 0;
}

function getSuggestions(text) {
  var pre = 'pre';
  var post = 'post';
  var results = [];
  if (getRandomBool(2)) {
    results.push(pre + text);
  }
  if (getRandomBool(2)) {
    results.push(text);
  }
  if (getRandomBool(2)) {
    results.push(text + post);
  }
  if (getRandomBool(2)) {
    results.push(pre + text + post);
  }
  return new Promise((resolve, reject) => {
    const randomTimeout = Math.random() * LATENCY;
    setTimeout(() => {
      if (getRandomBool(FAILURE_COUNT)) {
        reject();
      } else {
        resolve(results);
      }
    }, randomTimeout);
  });
}