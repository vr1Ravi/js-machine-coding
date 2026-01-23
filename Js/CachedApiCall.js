
function cachedApiCall(cacheTime){
    let cache;
    let previousHitTime;
    let currentHitTime;
    return async function(url, headers){
        if(currentHitTime) previousHitTime = currentHitTime
          currentHitTime = new Date();
        const hitDifference = currentHitTime - previousHitTime;
        if(hitDifference <= cacheTime && cache){
            console.log("Fetched from cache!");
            return cache;
        }

        try {
        const resposne = await fetch(url, headers);
        const data = await resposne.json()
        cache = data;
        console.log("Fetched from Network!");
        return cache;
        } catch (error) {
            return error
        }
    
    }
}

const call = cachedApiCall(1500)
call('https://jsonplaceholder.typicode.com/todos/1', {}).then(data => console.log(data))

setTimeout(() => {
    call('https://jsonplaceholder.typicode.com/todos/1', {}).then(data => console.log(data))
}, 1600)
