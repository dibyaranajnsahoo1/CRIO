// script.js
document.addEventListener("DOMContentLoaded", function() {
    window.onscroll = function() {
        var navbar = document.getElementById("mainNavbar");
        var navLinks = document.querySelectorAll("#mainNavbar .nav-link");
        
        if (document.documentElement.scrollTop > 50) {
            navbar.classList.add("scrolled");
            navLinks.forEach(link => {
                link.style.color = "white"; // Change text color to white after scroll
            });
        } else {
            navbar.classList.remove("scrolled");
            navLinks.forEach(link => {
                link.style.color = "black"; // Change text color to black before scroll
            });
        }
    };
});
