// Navbar scroll effect
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelector(".nav-links a");
    const hamburgerBars = document.querySelector(".hamburger .bar");

    if (window.scrollY > 670) {
        navbar.classList.add("scrolled");
        navLinks.forEach(link => link.style.color = "black");
        
        // Change logo color
        logo.style.color = "black";

        // Change hamburger bars color
        hamburgerBars.forEach(bar => bar.style.backgroundColor = "black");

    } else {
        navbar.classList.remove("scrolled");

        // Reset text color for all links
        navLinks.forEach(link => link.style.color = "white");
        
        // Reset logo color
        logo.style.color = "white";

        // Reset hamburger bars color
        hamburgerBars.forEach(bar => bar.style.backgroundColor = "white");
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
