/* const button = document.getElementById("btn");
const text = document.querySelector("#text"); //specify id or class inside ()
console.log(button, text);
 */
const DOMSelectors = {
    button:document.getElementById("btn"),
    text:document.querySelector("#text"),
    empty:document.querySelector(".nothing"),
    point:document.querySelectorAll(".point"), //gets all instances of this
    pointTwo:document.getElementById("pointTwo"),
};
//console.log(DOMSelectors.button) //can get specific element
console.log(DOMSelectors);