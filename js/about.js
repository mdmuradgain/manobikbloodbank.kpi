// JavaScript to handle responsive menu and scroll to top functionality

document.addEventListener("DOMContentLoaded", function () {
    // Toggle menu on small screens
    const menuToggle = document.getElementById("menuToggle");
    const menu = document.getElementById("menu");
  
    menuToggle.addEventListener("click", function () {
      menu.classList.toggle("active");
    });
  
    // Scroll to top functionality
    const scrollTopBtn = document.getElementById("scrollTopBtn");
  
    window.onscroll = function () {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = "block";
      } else {
        scrollTopBtn.style.display = "none";
      }
    };
  
    scrollTopBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  
    // Validation (example for form validation if needed)
    function validateForm() {
      const name = document.forms["contactForm"]["name"].value;
      const email = document.forms["contactForm"]["email"].value;
  
      if (name === "" || email === "") {
        alert("Name and email must be filled out");
        return false;
      }
  
      // Add more validation as needed
    }
  });
  