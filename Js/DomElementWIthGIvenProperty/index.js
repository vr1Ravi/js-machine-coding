/**
 * In css a certain property can have value with different variants. like for color property
 * we can pass "red" or "f00". Browser computes the property in a uniform way. for color it will convert to
 * rgb format.
 * We can leverage windo method "getComputedStyle" to get the computed style property
 */

function findElementByProperty(){
  const elements = [];
  bfsRoot(Array.from(document.body.children)[0], elements)
  console.log({elements})
}

function bfsRoot(root, elements){
const queue = [root];
while(queue.length){
    const front = queue.shift();
    const isRed = checkColorStyle(front)
    if(isRed) elements.push(front)
    queue.push(...Array.from(front.children))
}
}
function checkColorStyle(element){
return window.getComputedStyle(element).getPropertyValue("color") === "rgb(255, 0, 0)"
}
findElementByProperty("color" , "red")