// =========================
// Navbar Background
// =========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (navbar) {

        if (window.scrollY > 30) {
            navbar.style.background = "rgba(5,5,5,.85)";
        } else {
            navbar.style.background = "rgba(5,5,5,.55)";
        }

    }

});

// =========================
// Active Navbar Link
// =========================

const links = document.querySelectorAll(".navbar a");

links.forEach(link => {

    link.addEventListener("click", () => {

        links.forEach(l => l.classList.remove("active"));

        link.classList.add("active");

    });

});


// =========================
// Counter Animation
// =========================

const counters = document.querySelectorAll(".counter");

let counterStarted = false;

function runCounters() {

    if (counterStarted) return;

    const statsSection = document.querySelector(".stats");

    if (!statsSection) return;

    const sectionTop = statsSection.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight - 100) {

        counterStarted = true;

        counters.forEach(counter => {

            const target = +counter.dataset.target;

            let current = 0;

            const increment = Math.ceil(target / 80);

            function updateCounter() {

                current += increment;

                if (current >= target) {

                    counter.innerText = target + (counter.dataset.suffix || "");

                } else {

                    counter.innerText = current + (counter.dataset.suffix || "");

                    setTimeout(updateCounter, 30);

                }

            }

            updateCounter();

        });

    }

}

window.addEventListener("scroll", runCounters);

runCounters();


// =========================
// FAQ
// =========================

const faqs = document.querySelectorAll(".faq-item");

faqs.forEach(item => {

    const btn = item.querySelector(".faq-question");

    if (btn) {

        btn.addEventListener("click", () => {

            item.classList.toggle("active");

        });

    }

});


// =========================
// Mobile Menu
// =========================

const menuToggle = document.getElementById("menuToggle");

const mobileMenu = document.getElementById("mobileMenu");

if (menuToggle && mobileMenu) {

    menuToggle.addEventListener("click", () => {

        mobileMenu.classList.toggle("active");

    });

}
const mobileLinks = document.querySelectorAll(".mobile-menu a");

mobileLinks.forEach(link => {

    link.addEventListener("click", function () {

        mobileMenu.classList.remove("active");

    }, true);

});
const menuClose = document.getElementById("menuClose");

if (menuClose && mobileMenu) {
    menuClose.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
    });
}
