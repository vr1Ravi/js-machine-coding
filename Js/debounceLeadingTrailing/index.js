const input = document.getElementById("input")




function debounce(fun, delay, options = {leading : false, trailing: true}){
let timeoutId;
let initialCall = true;
return function(...args){
    let context = this;
    if(initialCall && options.leading){
            fun.apply(context, args)
            initialCall = false;
            if(options.leading && !options.trailing) return;
            if(!(options.leading && options.trailing)) return;
        }
    if(timeoutId) clearTimeout(timeoutId)
    timeoutId =  setTimeout(() =>{
        fun.apply(context, args)
    }, delay)
}
}


function search(event){
 console.log(event.target.value)
}

// const debouncedSearch = debounce(search, 1000, {leading: true, trailing: false})
// const debouncedSearch = debounce(search, 1000, {leading: false, trailing: true})
const debouncedSearch = debounce(search, 1000, {leading: true, trailing: true})
// const debouncedSearch = debounce(search, 1000, {leading: false, trailing: false})


input.addEventListener("keyup", debouncedSearch)