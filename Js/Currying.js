

/*
Example:
    const sum = generateSum(4);
    console.log(sum(1)(2)(3)(4))// 10
    console.log(sum(1,2,3,4,5,6)) // 10
    console.log(sum(1)(2,3,4)) // 10
*/




function generateSum(limit){
    if(!limit) throw new Error("generateSum expects a limit")
    let helper = (...args1) => {

        if(args1.length >= limit){
            return args1.slice(0, limit).reduce((acc, curVal) => curVal + acc, 0);
        }else{
            // args length is less than the internal limit;
            return (...args2) => {
               return helper(...args1, ...args2)
            }
        }
    }

    return helper;
}

const sum = generateSum(4);

