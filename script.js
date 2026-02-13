// ======================================================
// FEATURE 1: HERO IMAGE SLIDER (s1.webp, s2.webp, s3.webp)
// ======================================================

const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;
let autoSlide;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) {
            slide.classList.add("active");
        }
    });
}

function nextSlide() {
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }
    showSlide(currentIndex);
}

function startAutoSlide() {
    autoSlide = setInterval(nextSlide, 3000);
}

nextBtn.addEventListener("click", () => {
    nextSlide();
    clearInterval(autoSlide);
    startAutoSlide();
});

prevBtn.addEventListener("click", () => {
    prevSlide();
    clearInterval(autoSlide);
    startAutoSlide();
});

startAutoSlide();


// ======================================================
// FEATURE 2: SEARCH BAR VALIDATION
// ======================================================

const searchForm = document.querySelector(".search-form");
const searchInput = document.querySelector(".search-input");

searchForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const value = searchInput.value.trim();

    if (value === "") {
        alert("Please enter a product name!");
    } else {
        alert("Searching for: " + value);
        searchInput.value = "";
    }
});


// ======================================================
// FEATURE 3: ADD TO CART COUNTER
// ======================================================

let cartCount = 0;
const cartText = document.querySelector(".cart .action-text");
const productCards = document.querySelectorAll(".product-card");

productCards.forEach(card => {
    card.addEventListener("click", () => {
        cartCount++;
        cartText.textContent = "Cart (" + cartCount + ")";
    });
});


// ======================================================
// FEATURE 4: SCROLL TO TOP BUTTON
// ======================================================

const scrollBtn = document.createElement("button");

scrollBtn.innerText = "↑";
scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "20px";
scrollBtn.style.right = "20px";
scrollBtn.style.padding = "10px 15px";
scrollBtn.style.fontSize = "18px";
scrollBtn.style.border = "none";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.backgroundColor = "#2874f0";
scrollBtn.style.color = "#fff";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.display = "none";
scrollBtn.style.zIndex = "1000";

document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// ======================================================
// FEATURE 5: DARK / LIGHT THEME TOGGLE
// ======================================================

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function (e) {
    e.preventDefault();
    document.body.classList.toggle("dark-mode");

    // Change icon
    const icon = this.querySelector("i");
    if (document.body.classList.contains("dark-mode")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
});
