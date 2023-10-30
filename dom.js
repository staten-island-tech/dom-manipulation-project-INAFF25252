/* const button = document.getElementById("btn");
const text = document.querySelector("#text"); //specify id or class inside ()
console.log(button, text);
 */
//The Document Object Model, or DOM, is essentially the elements you write into your HTML. DOMSelectors allow you to easily access your HTML in JS.

// DOMSelectors are objects that hold access to the DOM that you can call upon easily at any point in your code.
const DOMSelectors = {
    card: document.querySelector(".card"),
    form: document.querySelector("#form"),
    input1: document.querySelector(".first-name"),
    input2: document.querySelector(".last-name"),
    input3: document.querySelector(".old"),
    h2: document.querySelectorAll(".first"),
    h2last:document.querySelectorAll(".last"),
    h3:document.querySelectorAll(".age"),
    img: document.querySelectorAll(".card-img"),
    gallery: document.querySelector(".flex-container"),
    button:document.getElementById("#btn"),
    text:document.querySelector("#text"),
    empty:document.querySelector(".nothing"),
    pic:document.querySelector(".img"),
    /* point:document.querySelectorAll(".point"), //gets all instances of this
    pointTwo:document.getElementById("pointTwo"), */
};
//console.log(DOMSelectors.points[0]); // this returns the first ever element in the document with class 'point'
//console.log(DOMSelectors.button) //can get specific element
console.log(DOMSelectors);


DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
function random(){
    const R = Math.random()*256;
    const G = Math.random()*256;
    const B=  Math.random()*256;
    console.log(R,G,B);
    return(R,G,B)
};
//make a function that sets the background color of your fart to the returned r, g, and b.
//select all created cards 
function getrandom(colorObject, card,){
const get = `rgb(${colorObject.R}, ${colorObject.G},${colorObject.B})`
card.style.backgroundColor = get
} 
    console.log(DOMSelectors.input1.value, DOMSelectors.input2.value, DOMSelectors.input3.value, DOMSelectors.pic.value);
    function Card(){
    DOMSelectors.gallery.insertAdjacentHTML("afterbegin", 
    `<div class="card">
    <button class = "remove"></button>
    <img src = "${DOMSelectors.pic.value}" alt="pic" class="card-img"></img>
    <div class = "first">${DOMSelectors.input1.value}</div>
    <div class = "last">${DOMSelectors.input2.value}</div>
    <div class="age">${DOMSelectors.input3.value}</div>
    </div>`);
    const getCard = document.querySelectorAll(".card")
    const randomColor = getCard[getCard.length-1]
    getrandom(random(),randomColor);
    };
    function remove() {
        const button = document.querySelectorAll(".remove")
        button.forEach(btn => {
            btn.addEventListener('click', function(evt)
            {
                evt.currentTarget.parentNode.remove();
            });
          });
    }
    Card();
    clearFields();
    remove();
    
//remove button
});
function clearFields(){
    DOMSelectors.input1.value = ""
    DOMSelectors.input2.value = ""
    DOMSelectors.input3.value = ""
    DOMSelectors.pic.value = ""
    }
    




/* let x = prompt("Insert First Name");
let y = prompt("Insert Last Name");

function object(first, last){
    console.log(`Hi ${first} ${last}`);
};

object(x,y); */