

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

// const sum = generateSum(4);


function sum(a, b, c, d){
    return a+b+c+d
}


function curry(fun){
    if(!fun) throw new Error("curry expects a function")
  let executer =  function(...args1){
    if(args1.length >= fun.length)  return fun(...args1);
    return (...args2) => {
        return executer(...args1, ...args2)
    }

  }
  return executer;
}

let curriedSum = curry(sum);
console.log(calculate(1)(2)(3)(4)); // 10
console.log(calculate(1, 2, 3, 4, 5, 6)); // 10
console.log(calculate(1)(2, 3, 4)); // 10

