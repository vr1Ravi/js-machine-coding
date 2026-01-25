
/**
 * createDocumentFragment :- document.createDocumentFragment() creates a lightweight, minimal document object called a DocumentFragment. 
 * It is used as a temporary container to hold and manipulate DOM nodes before adding them to the main document.
 * It is not part of the main DOM tree, so changes to it do not cause reflows or repaints.
You can append elements to the fragment, and then append the fragment to the DOM; all its children are moved into the DOM in a single operation.
Useful for improving performance when adding or moving multiple elements.
 */
const root = document.getElementById("root");


const dom = {
    type: "div",
    props: {id: "hello"},
    children: [{type: "h1", children: "HELLO"}]
}

const render = (element, root) => {

const renderHelper = (domElement) => {
const {type, props, children} = domElement;
const el = document.createElement(type)
if(props) Object.entries(props).forEach(entry => el.setAttribute(entry[0], entry[1]));
 
if(Array.isArray(children)){
    const fragment = document.createDocumentFragment();
    for(let child of children){
        const childEl = renderHelper(child);
        fragment.appendChild(childEl)
    }
    el.appendChild(fragment)
}else{
    el.innerHTML = children;
}
return el;
}

const renderElement = renderHelper(element);
root.appendChild(renderElement);

}


render(dom, root);


