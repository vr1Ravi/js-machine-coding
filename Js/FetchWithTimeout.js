function fetchWithTimeout(url, timeout){
    const controller = new AbortController();
    const signal = controller.signal;
    let timeoutId;
    return new Promise((res, rej) => {
        fetch(url, {signal}).then((response) => {
            if(timeoutId) return clearTimeout(timeoutId);
            res(response);
        }).catch((err) => {
            rej(err)
        })

        timeoutId = setTimeout(() => {
            controller.abort();
            rej("Timeout has been expired")
        }, timeout)
    })
}