// Navbar scroll effect
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelectorAll(".nav-links a"); // Selects all the anchor links
    const hamburgerBars = document.querySelectorAll(".hamburger .bar"); // Selects all the bars inside hamburger
    const logo = document.querySelector(".logo a"); // Selects the logo anchor tag


    console.log('Scroll position:',this.window.scrollY);


    if (window.scrollY > 20) {
        navbar.classList.add("scrolled");

        // Change link colors to black
        navLinks.forEach(link => link.style.color = "black");

        // Change logo color to black
        logo.style.color = "black";

        // Change hamburger bars color to black
        hamburgerBars.forEach(bar => bar.style.backgroundColor = "black");

    } else {
        navbar.classList.remove("scrolled");

        // Reset text color for all links to white
        navLinks.forEach(link => link.style.color = "white");

        // Reset logo color to white
        logo.style.color = "white";

        // Reset hamburger bars color to white
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
