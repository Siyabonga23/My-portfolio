
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    const logo = document.querySelector(".logo a");
    const navLinks = document.querySelectorAll(".nav-links li a");
    const hamburgerBars = document.querySelectorAll(".hamburger .bar");

    console.log('Scroll position:', window.scrollY);

    if (window.scrollY > 670) {
        navbar.classList.add("scrolled");
        logo.classList.add("scrolled-logo");
        navLinks.forEach(link => link.classList.add("scrolled-links"));
        hamburgerBars.forEach(bar => bar.classList.add("scrolled-bars"));
    } else {
        navbar.classList.remove("scrolled");
        logo.classList.remove("scrolled-logo");
        navLinks.forEach(link => link.classList.remove("scrolled-links"));
        hamburgerBars.forEach(bar => bar.classList.remove("scrolled-bars"));
    }
});


// Hamburger menu toggle
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger"); // Selects the hamburger button
    const navLinks = document.querySelector(".nav-links"); // Selects the nav menu

    hamburger.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevents event from bubbling up
        navLinks.classList.toggle("active"); // Toggles menu visibility
        hamburger.classList.toggle("active"); // Adds animation class to the button
    });

    // Close the menu when clicking outside
    document.addEventListener("click", function (event) {
        if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
            navLinks.classList.remove("active");
            hamburger.classList.remove("active");
        }
    });
});
