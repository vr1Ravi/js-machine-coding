const obj = {
  a: 1,
  b: {
    c: "Hello World",
    d: 2,
    e: {
     f: {
       g: -4,
      },
    },
    h: "Good Night Moon",
  },
};

const filter = (s) => typeof s === "string";


function filterNestedObject(obj, filter){
  for(let key in obj){
    const val = obj[key];
    if(!Array.isArray(val) && typeof val === "object"){
        const filteredSubObject = filterNestedObject(val, filter);
        
        if(!Object.keys(filteredSubObject).length){
            delete obj[key];
        }else{
             obj[key] = filteredSubObject;
        }
    }else{
            const passed =  filter(val);
            if(!passed) delete obj[key];
    }

  }

  return obj;

}
console.log(filterNestedObject(obj, filter))
/**
 * 
 * Output:
{
  b: {
    c: "Hello World",
    h: "Good Night Moon",
  }
};
 */