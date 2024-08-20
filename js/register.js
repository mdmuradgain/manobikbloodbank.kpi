  document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const menu = document.getElementById("menu");

    menuToggle.addEventListener("click", function () {
      menu.classList.toggle("active");
    });

    // Form Validation
    document.getElementById("registrationForm").addEventListener("submit", function (e) {
      e.preventDefault();

      let email = document.getElementById("email").value;
      let phone = document.getElementById("phone").value;
      let emailError = document.getElementById("emailError");
      let phoneError = document.getElementById("phoneError");
      let confirmationPopup = document.getElementById("confirmationPopup");

      emailError.textContent = "";
      phoneError.textContent = "";

      if (validateEmail(email) && validatePhone(phone)) {
        confirmationPopup.style.display = "flex";
      }
    });

    function validateEmail(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent =
          "Invalid email address";
        return false;
      }
      return true;
    }

    function validatePhone(phone) {
      const phonePattern = /^[+]?[0-9]{10,15}$/;
      if (!phonePattern.test(phone)) {
        document.getElementById("phoneError").textContent =
          "Invalid phone number";
        return false;
      }
      return true;
    }

    // Image Preview
    function previewImage(event) {
      const reader = new FileReader();
      reader.onload = function () {
        const output = document.getElementById("imagePreview");
        output.src = reader.result;
        output.style.display = "block";
      };
      reader.readAsDataURL(event.target.files[0]);
    }

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

    // Close Confirmation Popup
    function closePopup() {
      document.getElementById("confirmationPopup").style.display = "none";
    }
    window.closePopup = closePopup;
  });