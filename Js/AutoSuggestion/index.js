const inputBox = document.getElementById("auto-suggest");
const autoSuggestionBox = document.getElementById("auto-suggest-box");
const autoSuggestions = document.getElementsByClassName("auto-suggest-item");
const loader =  document.getElementById("loader");
const excludeClassNames = ["auto-suggest-box", "input", "auto-suggest-item"]


const createZeroStateFunction = () => {
   const zeroStateText = document.createElement("p");
   zeroStateText.innerText = "No suggestion found!, please continue typing."
   autoSuggestionBox.appendChild(zeroStateText)
}

const handleFocus = () => {
  autoSuggestionBox.classList.remove("hide-auto-box")
  autoSuggestionBox.innerHTML = "";
  loader.classList.add("toggle-show")
  getSuggestions("random")
  .then((response) => {
    console.log({response});
    
    if(!response.length){
      createZeroStateFunction();
      return;
    }
    response.forEach(suggestion => {
       const searchSuggestion = document.createElement("p");
        searchSuggestion.innerText = suggestion
        searchSuggestion.classList.add("auto-suggest-item");
        autoSuggestionBox.appendChild(searchSuggestion)
    })
}).catch(() => {
  createZeroStateFunction()
}).finally(() => {
    loader.classList.remove("toggle-show")
})

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
if(event.target.className === "auto-suggest-item"){
inputBox.value = event.target.innerText;
autoSuggestionBox.classList.add("hide-auto-box");
}
}
const handleWindowClick = (event) => {
const isOutSideDetected = !excludeClassNames.includes(event.target.className)
if(isOutSideDetected) autoSuggestionBox.classList.add("hide-auto-box");
}
window.addEventListener("mousedown", handleWindowClick)
autoSuggestionBox.addEventListener("mousedown", handleAutoSuggestionBoxClick)
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