const root = document.getElementById("root");

// const getElByClassName = (root, className) => {
//   let ansList = [];
//   if (root.classList.contains(className)) ansList.push(root);
//   const children = Array.from(root.children);
//   for (let child of children) {
//     const childAnsList = getElByClassName(child, className);
//     ansList = [...ansList, ...childAnsList];
//   }
//   return ansList;
// };

// const getElByClassNameByHierarchy = (root, hirerarchy) => {
//   const hirerarchyList = hirerarchy.split(">");
//   const result = [];
//   traverseDom(root, hirerarchyList, 0, result);
//   return result;

// };

// const traverseDom = (element, hirerarchyList, index, result) => {
//   const className = hirerarchyList[index];
//   if(index === hirerarchyList.length - 1 && element.classList.contains(className)){
//     result.push(element);
//     return;
//   }

//   for(let child of element.children){
//     if(element.classList.contains(className)){
//       traverseDom(child, hirerarchyList, index + 1, result)
//     }else{
//       traverseDom(child, hirerarchyList, 0, result)
//     }
//   }

// };

// console.log(getElByClassName(root, "d"));
console.log(getElByClassName(root, "a>d"));
