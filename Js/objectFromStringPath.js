function get(obj, path = ""){

    let keys = path.replaceAll("[", ".");
    keys = keys.replaceAll("]", "");
    keys = keys.split(".").filter(Boolean)

    let reference = obj;
    for(let key of keys){
        if(reference[key] === undefined) return null;
        reference = reference[key];

    }
    return reference;
}



console.log(get({ developer: "Software Engineer" }, "developer")); // => 'Software Engineer'
console.log(get({ developer: { firstName: "Tom", lastName: "Cruz" } }, "developer.lastName")); //=>'Cruz
console.log(get([{ developer: "Tom" }, { count: [0, 1] }], "[1].count[0]")); //=>0
console.log(get([{ developer: "Tom" }, [0, null]], "[1][1]")); //=>null 
console.log(get([{ developer: "Tom" }, [0, null]], "[1][3]")); //=>null 
/**
 * "[1].count[0]". -> ".1.count.0". -> ["", "1", "count", "0"]. -> ["1", "count","0"]
 */