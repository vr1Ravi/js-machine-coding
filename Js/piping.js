/**
 * Input
 * {
  a : {
    b : (a,b,c) => a+b+c,
    c : (a,b,c) => a+b-c,
  },
  d : (a,b,c) => a-b-c
}
 */
const obj =  {
  a : {
    b : (a,b,c) => a+b+c,
    c : (a,b,c) => a+b-c,
  },
  d : (a,b,c) => a-b-c
}


function Fn(obj){
    return function(...args){
        for(let key in obj){
            const val = obj[key];
            if(typeof val === "function"){
                const evalData = val(...args);
                obj[key] = evalData;
            }else{
                 Fn(val)(...args);
            }
        }
    }
}

Fn(obj)(1,1,1);
console.log(obj);

/**
 * Output:
{
  a : {
    b : 3,
    c : 1
  },
  d: -1
}
 */