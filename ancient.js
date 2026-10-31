
// =========================
// MOBILE NAVIGATION
// =========================

const menuToggle = document.getElementById("menuToggle");
const navigation = document.querySelector(".navbar nav");

menuToggle.addEventListener("click", () => {
    navigation.classList.toggle("active");

    menuToggle.textContent =
        navigation.classList.contains("active") ? "✕" : "☰";
});

// Close menu after clicking a link

document.querySelectorAll(".navbar nav a").forEach(link => {
    link.addEventListener("click", () => {
        navigation.classList.remove("active");
        menuToggle.textContent = "☰";
    });
});


// =========================
// CIVILIZATION SEARCH
// =========================

const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".civilization-card");
const noResults = document.getElementById("noResults");

searchInput.addEventListener("input", () => {

    const searchValue = searchInput.value.toLowerCase().trim();

    let visibleCards = 0;

    cards.forEach(card => {

        const cardText = card.textContent.toLowerCase();

        if (cardText.includes(searchValue)) {

            card.style.display = "block";
            visibleCards++;

        } else {

            card.style.display = "none";

        }

    });

    noResults.style.display =
        visibleCards === 0 ? "block" : "none";

});


// =========================
// REVEAL ANIMATION
// =========================

const revealElements = document.querySelectorAll(
    ".civilization-card, .timeline-item, .stat"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");
            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.12
});

revealElements.forEach(element => {

    element.classList.add("reveal");
    observer.observe(element);

});
