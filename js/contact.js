    const menuToggle = document.getElementById("menuToggle");
    const menu = document.getElementById("menu");
  
    menuToggle.addEventListener("click", function () {
      menu.classList.toggle("active");
    });

document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const scrollTopBtn = document.getElementById("scrollTopBtn");
  
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      let isValid = true;
  
      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const phone = document.getElementById("phone");
      const message = document.getElementById("message");
  
      const nameError = document.getElementById("nameError");
      const emailError = document.getElementById("emailError");
      const phoneError = document.getElementById("phoneError");
      const messageError = document.getElementById("messageError");
  
      nameError.textContent = "";
      emailError.textContent = "";
      phoneError.textContent = "";
      messageError.textContent = "";
  
      if (name.value.trim() === "") {
        isValid = false;
        nameError.textContent = "Name is required.";
      }
  
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!emailPattern.test(email.value)) {
        isValid = false;
        emailError.textContent = "Please enter a valid email address.";
      }
  
      const phonePattern = /^[0-9]{10,14}$/;
      if (!phonePattern.test(phone.value)) {
        isValid = false;
        phoneError.textContent = "Please enter a valid phone number.";
      }
  
      if (message.value.trim() === "") {
        isValid = false;
        messageError.textContent = "Message is required.";
      }
  
      if (isValid) {
        alert("Thank you! Your message has been sent successfully.");
        contactForm.reset();
      }
    });
  
    // Scroll to top functionality
    window.onscroll = function () {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollTopBtn.style.display = "block";
      } else {
        scrollTopBtn.style.display = "none";
      }
    };
  
    scrollTopBtn.addEventListener("click", function () {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  });
  window.onscroll = function () {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById("scrollTopBtn").style.display = "block";
    } else {
      document.getElementById("scrollTopBtn").style.display = "none";
    }
  };

  document.getElementById("scrollTopBtn").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });