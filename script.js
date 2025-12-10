// Mobile navbar toggle
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });

    // Close menu when link is clicked
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("show");
        });
    });
}

// Project filters (only on main page)
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const category = btn.dataset.filter;

        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        projectCards.forEach(card => {
            const cardCategory = card.dataset.category;

            if (category === "all" || category === cardCategory) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});

// Footer year
const yearSpan = document.getElementById("year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// Contact form (main page)
function handleForm(event) {
    event.preventDefault();

    const status = document.getElementById("form-status");
    const name = document.getElementById("name").value.trim();

    if (status) {
        status.textContent = `Thank you, ${name || "friend"}! This form does not send emails yet, but it is ready to be connected to a backend or email service.`;
    }
}
