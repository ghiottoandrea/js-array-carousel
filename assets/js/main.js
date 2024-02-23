//Creo un array delle immagini
const imgs = [
    "01.webp",
    "02.webp",
    "03.webp",
    "04.webp",
    "05.webp",
]

//ActiveImage serve per dare un numero all'immagine 
let activeImage = 0;

const slideElement = document.querySelector(".slides")


//Creo ciclo for per scorrere le immagini nell'array
for (let i = 0; i < imgs.length; i++) {
    const slide = imgs[i];

    const slideMarkup = `<img class="${i === activeImage ? `active` : ``}" src="./assets/img/${slide}" alt="">`
    console.log(slideMarkup);

    slideElement.insertAdjacentHTML(`beforeend`, slideMarkup);
}

//Varibile per i pulsanti
const upElement = document.querySelector(".up");
const downElement = document.querySelector(".down");

//Premendo il pulsante giù vado all'immagine successiva
downElement.addEventListener(`click`, function () {
    console.log(`funziona`);

    activeImage++

    //Rimuovo active al'immagine
    const currentImage = document.querySelector(`img.active`)
    console.log(currentImage);
    currentImage.classList.remove(`active`)

    //Aggiungo active all'immagine succesiva
    const allimgs = document.querySelectorAll(`.slides img`)
    console.log(allimgs);

    //Una volta arrivata alla fine dell'array faccio ripartire da capo
    if (activeImage > imgs.length - 1) {
        activeImage = 0;
    }
    allimgs[activeImage].classList.add(`active`)


})

//Premendo il pulsante su vado all'immagine precedente
upElement.addEventListener(`click`, function () {
    console.log(`funziona`);

    activeImage--
    //Rimuovo active al'immagine
    const currentImage = document.querySelector(`img.active`)
    console.log(currentImage);
    currentImage.classList.remove(`active`)

    //Aggiungo active all'immagine succesiva
    const allimgs = document.querySelectorAll(`.slides img`)
    console.log(allimgs);

    //Posso far scorrere dalla prima immagine
    if (activeImage < 0) {
        activeImage = imgs.length - 1;
    }

    allimgs[activeImage].classList.add(`active`)


})