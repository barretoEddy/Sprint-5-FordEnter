class Carousel {
    constructor(image, title, url) {
        this.image = image;
        this.title = title;
        this.url = url;
    }
}

let currentIndex = 0;
let intervalId;

const slides = [
    new Carousel("img/imagem_3.jpg", "Nova Ford Bronco Sport 2022", "lancamento.html"),
    new Carousel("img/imagem_1.jpg", "Esta é a nova Ranger Ford 2022. Verifique novidades.", "lancamento.html"),
    new Carousel("img/imagem_2.jpg", "Ford a nossa história", "#")
];

function next() {
    currentIndex = (currentIndex + 1) % slides.length;

    const carouselDiv = document.getElementById("carousel");
    const carouselTitle = document.getElementById("carousel-title");

    
    carouselDiv.innerHTML = "";

    const imgElement = document.createElement("img");
    imgElement.src = slides[currentIndex].image;
    imgElement.alt = slides[currentIndex].title;
    imgElement.style.width = "70%"; 
    imgElement.style.height = "auto";

    carouselDiv.appendChild(imgElement);

    // Update title and link
    carouselTitle.innerHTML = `<a href="${slides[currentIndex].url}">${slides[currentIndex].title}</a>`;
}

function start() {
    next(); // Display the first slide immediately
    intervalId = setInterval(next, 2000);
}

window.onload = start;


