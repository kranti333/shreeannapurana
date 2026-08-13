/*==========================
ANAPURNA COLD DRINK SHOP
script.js
==========================*/

// ==========================
// Mobile Menu Toggle
// ==========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
    } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    }
});

// ==========================
// Close Menu on Link Click
// ==========================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        const icon = menuBtn.querySelector("i");
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");

    });

});

// ==========================
// Sticky Navbar Shadow
// ==========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.12)";
        header.style.background = "rgba(247,242,232,.98)";

    } else {

        header.style.boxShadow = "none";
        header.style.background = "rgba(247,242,232,.96)";
    }

});

// ==========================
// Scroll Reveal Animation
// ==========================

const revealElements = document.querySelectorAll(
    ".hero-content, .hero-image, .drink-card, .about-image, .about-content, .location-left, .location-right, .footer-content"
);

revealElements.forEach(el => {
    el.classList.add("reveal");
});

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    revealElements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if (top < windowHeight - 100) {

            el.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ==========================
// Active Navigation Link
// ==========================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active-link");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active-link");

        }

    });

});

// ==========================
// Smooth Scroll
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ==========================
// Button Ripple Effect
// ==========================

const buttons = document.querySelectorAll(
    ".hero-btn, .order-btn, .drink-card button"
);

buttons.forEach(button => {

    button.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        ripple.classList.add("ripple");

        const rect = button.getBoundingClientRect();

        ripple.style.left = (e.clientX - rect.left) + "px";
        ripple.style.top = (e.clientY - rect.top) + "px";

        button.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});

// ==========================
// Floating Hero Image
// ==========================

const heroImage = document.querySelector(".hero-image img");

if (heroImage) {

    window.addEventListener("mousemove", (e) => {

        const x = (window.innerWidth / 2 - e.pageX) / 40;
        const y = (window.innerHeight / 2 - e.pageY) / 40;

        heroImage.style.transform =
            `translate(${x}px, ${y}px)`;

    });

}

// ==========================
// Current Year in Footer
// ==========================

const copyright = document.querySelector(".copyright");

if (copyright) {

    copyright.innerHTML =
        `© ${new Date().getFullYear()} Annapurna Cold Drink Shop. All Rights Reserved.`;

}

// ==========================
// Loader (Optional)
// ==========================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

// ==========================
// Console Message
// ==========================

console.log("🥤 Annapurna Cold Drink Shop Website Loaded Successfully!");