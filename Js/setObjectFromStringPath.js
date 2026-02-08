const obj = {};

function updatedObj(obj, path, value) {
  const [currentKey, ...restKeys] = path;

  if (restKeys.length === 0) {
    obj[currentKey] = value;
    return;
  } else {
    if (!obj[currentKey]) {
      const isNumeric = `${+restKeys[0]}` === restKeys[0];
      obj[currentKey] = isNumeric ? [] : {};
    }
    const ref = obj[currentKey];
    updatedObj(ref, restKeys, value);
  }
}

function set(obj, path, value) {
  let pathArr = path;

  if (typeof pathArr === "string") {
    pathArr = pathArr.replaceAll("[", ".").replaceAll("]", "").split(".");
  }

  updatedObj(obj, pathArr, value);
}
set(obj, "a[0].b.c", 4);
console.log(obj.a[0].b.c);

set(obj, ["x", "0", "y", "z"], 5);
console.log(obj.x[0].y.z);

console.log(obj);
