/* const button = document.getElementById("btn");
const text = document.querySelector("#text"); //specify id or class inside ()
console.log(button, text);
 */
//The Document Object Model, or DOM, is essentially the elements you write into your HTML. DOMSelectors allow you to easily access your HTML in JS.

// DOMSelectors are objects that hold access to the DOM that you can call upon easily at any point in your code.
const DOMSelectors = {
    form: document.querySelector("#form"),
    input1: document.querySelector(".first-name"),
    input2: document.querySelector(".last-name"),
    input3: document.querySelector(".old"),
    h2: document.querySelectorAll(".first"),
    h2last:document.querySelectorAll(".last"),
    h3: document.querySelectorAll("h3"),
    button:document.getElementById("#btn"),
    text:document.querySelector("#text"),
    empty:document.querySelector(".nothing"),
    /* point:document.querySelectorAll(".point"), //gets all instances of this
    pointTwo:document.getElementById("pointTwo"), */
};
//console.log(DOMSelectors.points[0]); // this returns the first ever element in the document with class 'point'
//console.log(DOMSelectors.button) //can get specific element
console.log(DOMSelectors);
function makeProfile() {
const profile = (`Hi, ${document.querySelectorAll(".first-name")} ${document.querySelectorAll(".last-name")} ${document.querySelectorAll(".old")}`)
return profile;
}
function make(profile) {

DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(DOMSelectors.input1.value, DOMSelectors.input2.value);
    DOMSelectors.h2.forEach((el) => el.textContent=DOMSelectors.input1.value);
    DOMSelectors.h2last.forEach((el) => el.textContent=DOMSelectors.input2.value);
    DOMSelectors.h3.forEach((el) => el.textContent=DOMSelectors.input3.value);
    document.querySelector(".gallery").insertAdjacentHTML("afterbegin", `<div class="card"><div class = "card-title">${DOMSelectors.firstName.value}</div></div>`);
    const profile = makeProfile();
    //clearFields()
//remove button
});
};
make();



/* let x = prompt("Insert First Name");
let y = prompt("Insert Last Name");

function object(first, last){
    console.log(`Hi ${first} ${last}`);
};

object(x,y); */