async function retryCall(fn, retires){
    console.log("retry", retires)
    try {
        const resposne = await fn();
        console.log("5", resposne);  
        return resposne;
    } catch (error) {
        if(retires === 1) return error;
        retryCall(fn, retires - 1)
    }
}


function fetchResponse(){
    return new Promise((res, rej) => {
        setTimeout(() => {
            const random = Math.round(Math.random());
            if(random){
                res({data : "data"});
            }else{
                rej(new Error("failed"));
            }
        },2000)
    })
}
async function callApi(){
     try {
        const response = await fetchResponse();
        console.log("30", response);        
        if(response.data) return  response.data
     } catch (error) {
        try {
            const response = await retryCall(fetchResponse, 5);
            if(response.data) return  response.data
        } catch (error) {
            return error
        }
     }
}

async function fetchData(){
   try {
    const data = await callApi();
    console.log("46", data);
   } catch (error) {
    console.log(error);
    
   }
}

fetchData();

