let head = document.getElementById("header");
let cont = document.getElementById("content");
let app = document.querySelector(".app");
let img = document.querySelector("img");
let bubble = document.querySelector(".bubble-text");
let text = document.getElementById("text");
const button = document.getElementById("button");



function joke() {
fetch("https://api.blablagues.net/?rub=blagues")
.then((res) => res.json())
.then((data) => { 
    const dataCont = data.data.content;
    head.textContent = dataCont.text_head;
    if (data.data.content.text == "") {
    cont.textContent = dataCont.text_hidden;
    } else {
    cont.textContent = dataCont.text;
    };
});
};

//boite de dialogue
function box() {
    bubble.style.display = "block";
    text.textContent = "Mais pas la! il faut cliquer plus bas sur Kenny!";
    img.addEventListener(("click"), () => {
        text.textContent = `Mais putain arrête, clique sur Kenny crétin!`;
        img.addEventListener(("click"), () => {
            text.textContent = "Si tu continues je vais t'arracher la tête!";
            img.addEventListener(("click"), () => {
                bubble.style.display = "none"; 
                    img.addEventListener("click", () => {
                        box();
                });
            }); 
        });
    });
};

joke();

button.addEventListener("click", joke);

img.addEventListener("click", () =>  { 
        box();
    });




















































































































// let head = document.getElementById('header');
// let content = document.getElementById('content');
// const title = document.querySelector("h1");
// const img = document.querySelector("img");
// let appl = document.querySelector(".app");
// console.log(appl);

// fetch("https://api.blablagues.net/?rub=blagues")
// .then((res) => res.json())
// .then((data) => {

//     head.textContent = data.data.content.text_head;

//     if (data.data.content.text == "") {
//         content.textContent = data.data.content.text_hidden;
//     } else {
//         content.textContent = data.data.content.text;
//     }  
// });

// appl.addEventListener(("click"), () => {

// fetch("https://api.blablagues.net/?rub=blagues")
// .then((res) => res.json())
// .then((data) => {

//     head.textContent = data.data.content.text_head;

//     if (data.data.content.text == "") {
//         content.textContent = data.data.content.text_hidden;
//     } else {
//         content.textContent = data.data.content.text;
//     }  
// });

// });

// img.addEventListener(("click"), () => {
//     title.textContent = "Clique pas la bordel, c'est plus bas crétin!";
//     img.addEventListener(("click"), () => {
//         title.textContent = "Arrête putain!";
//         img.addEventListener(("click"), () => {
//             title.textContent = "Je vais t'arracher les yeux";
//             img.addEventListener(("click"), () => {
//                 title.textContent = "Les bonnes blagues de Miiichel";
//             });
//         });
//     });
// });





