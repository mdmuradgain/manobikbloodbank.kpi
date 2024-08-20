document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const menu = document.getElementById("menu");
  
    menuToggle.addEventListener("click", function () {
      menu.classList.toggle("active");
    });
  
    // Form Validation
    document.getElementById("loginForm").addEventListener("submit", function (e) {
      e.preventDefault();
  
      let email = document.getElementById("email").value;
      let password = document.getElementById("password").value;
      let emailError = document.getElementById("emailError");
      let passwordError = document.getElementById("passwordError");
      let loginSuccess = document.getElementById("loginSuccess");
  
      emailError.textContent = "";
      passwordError.textContent = "";
      loginSuccess.textContent = "";
  
      if (validateEmail(email) && validatePassword(password)) {
        loginSuccess.textContent = "Login Successful!";
      }
    });
  
    function validateEmail(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Invalid email address";
        return false;
      }
      return true;
    }
  
    function validatePassword(password) {
      if (password.length < 6) {
        document.getElementById("passwordError").textContent = "Password must be at least 6 characters";
        return false;
      }
      return true;
    }
  });
  
  window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("scrollTopBtn").style.display = "block";
    } else {
      document.getElementById("scrollTopBtn").style.display = "none";
    }
  };
  
  document.getElementById("scrollTopBtn").onclick = function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  