const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");

    const expanded = navMenu.classList.contains("open");
    menuBtn.setAttribute("aria-expanded", expanded);
    menuBtn.textContent = expanded ? "✕" : "☰";
});
const contactForm = document.getElementById("contact-form");
const feedback = document.getElementById("contact-feedback");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("input-name").value.trim();
    const email = document.getElementById("input-email").value.trim();

    if (!name || !email) {
        feedback.textContent = "Please fill in all required fields.";
        feedback.style.color = "red";
    } else {
        feedback.textContent = "Thank you! Your message has been sent.";
        feedback.style.color = "#00e6b8";
        contactForm.reset();
    }
});
