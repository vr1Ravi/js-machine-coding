const root = document.getElementById("root");

const getElByClassName = (root, className) => {
  let ansList = [];
  if (root.classList.contains(className)) ansList.push(root);
  const children = Array.from(root.children);
  for (let child of children) {
    const childAnsList = getElByClassName(child, className);
    ansList = [...ansList, ...childAnsList];
  }
  return ansList;
};

console.log(getElByClassName(root, "d"));
