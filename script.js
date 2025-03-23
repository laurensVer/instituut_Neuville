document.addEventListener('DOMContentLoaded', () => {
    // Dynamische review toevoegen
    const reviewButton = document.getElementById('add-review-btn');
    const reviewList = document.getElementById('review-list');

    reviewButton.addEventListener('click', () => {
        const newReview = document.createElement('div');
        newReview.classList.add('review');
        newReview.innerHTML = `
            <p>"Deze plek is geweldig! Mijn huid ziet er fantastisch uit."</p>
            <h4>- Nieuwe Klant</h4>
        `;
        reviewList.appendChild(newReview);
    });
    
    // Valideer boeking
    const bookingForm = document.getElementById('booking-form');
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Bedankt voor uw boeking! Wij nemen spoedig contact met u op.');
        bookingForm.reset();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active"); // Zet het menu aan/uit
    });
});

let currentIndex = 0;
const slides = document.querySelectorAll('.hero .slide');
const totalSlides = slides.length;

// Zet de eerste afbeelding zichtbaar bij het laden van de pagina
slides[currentIndex].style.opacity = 1;

function showNextSlide() {
    slides[currentIndex].style.opacity = 0; // Verberg de huidige slide
    currentIndex = (currentIndex + 1) % totalSlides; // Ga naar de volgende slide, of begin weer bij 0
    slides[currentIndex].style.opacity = 1; // Toon de volgende slide
}

// Start de diavoorstelling na de pagina-initialisatie
setInterval(showNextSlide, 5000); // Verander elke 5 seconden van slide

// JavaScript voor het openen van de vergrote afbeelding
var modal = document.getElementById("imageModal");
var modalImg = document.getElementById("modalImage");
var captionText = document.getElementById("caption");
var closeBtn = document.getElementsByClassName("close")[0];

// Selecteer alle afbeeldingen in de galerij
var images = document.querySelectorAll(".gallery img");

// Voeg een klikfunctie toe aan elke afbeelding
images.forEach(function(image) {
    image.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    };
});

// Sluit de modal wanneer er op het kruisje wordt geklikt
closeBtn.onclick = function() {
    modal.style.display = "none";
};

// Sluit de modal wanneer er buiten de afbeelding wordt geklikt
modal.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
