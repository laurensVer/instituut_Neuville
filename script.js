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
