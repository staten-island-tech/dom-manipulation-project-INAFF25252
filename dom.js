/* const button = document.getElementById("btn");
const text = document.querySelector("#text"); //specify id or class inside ()
console.log(button, text);
 */
//The Document Object Model, or DOM, is essentially the elements you write into your HTML. DOMSelectors allow you to easily access your HTML in JS.

// DOMSelectors are objects that hold access to the DOM that you can call upon easily at any point in your code.
const DOMSelectors = {
    form: document.querySelector("#form"),
    input: document.querySelector(".first-name"),
    h2s: document.querySelectorAll("h2"),
    button:document.getElementById("#btn"),
    text:document.querySelector("#text"),
    empty:document.querySelector(".nothing"),
    point:document.querySelectorAll(".point"), //gets all instances of this
    pointTwo:document.getElementById("pointTwo"),
};
//console.log(DOMSelectors.points[0]); // this returns the first ever element in the document with class 'point'
//console.log(DOMSelectors.button) //can get specific element
console.log(DOMSelectors);
DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(DOMSelectors.input.value);
    DOMSelectors.h2s.forEach((el) => el.textContent=DOMSelectors.input.value);
});

function object(first, last){
    this.firstName = first;
    this.lastName = last;
    console.log(object);
};
let x = prompt("Insert First Name");
let y = prompt("Insert Last Name");
object(x,y);
