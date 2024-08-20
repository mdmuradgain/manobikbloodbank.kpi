document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
});

let slideIndex = 0;

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Change slide every 3 seconds
}

function plusSlides(n) {
    const slides = document.getElementsByClassName("slide");
    slideIndex += n;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    if (slideIndex < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

// Initialize the slider
showSlides();

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Show the confirmation popup
    document.getElementById('confirmationPopup').style.display = 'flex';
});

function closePopup() {
    document.getElementById('confirmationPopup').style.display = 'none';
}

  function previewImage(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        const imagePreview = document.getElementById('imagePreview');
        imagePreview.src = e.target.result;
        imagePreview.style.display = 'block';
      };
      reader.readAsDataURL(file);
    }
  }

      // Function to calculate days left until next donation
      function calculateDaysLeft(lastDonationDate) {
        const donationDate = new Date(lastDonationDate);
        const currentDate = new Date();
        const daysBetween = Math.ceil((currentDate - donationDate) / (1000 * 60 * 60 * 24));
        const daysLeft = 90 - daysBetween; // Assuming 90 days between donations
        return daysLeft > 0 ? daysLeft : "You can donate now!";
      }
  
      // Update the days left in the card
      document.querySelectorAll('.donor-card').forEach(card => {
        const lastDonationDate = card.querySelector('.last-donation-date').textContent;
        const daysLeft = calculateDaysLeft(lastDonationDate);
        card.querySelector('.days-left').textContent = daysLeft;
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

      $(document).ready(function() {
        // Replace this URL with your API endpoint
        var apiUrl = 'https://example.com/api/divisions';
  
        $.get(apiUrl, function(data) {
            var divisionSelect = $('#division');
            data.divisions.forEach(function(division) {
                divisionSelect.append('<option value="' + division.id + '">' + division.name + '</option>');
            });
        });
  
        // Similarly, you can fetch districts and upazilas based on the selected division
        $('#division').change(function() {
            var divisionId = $(this).val();
            if (divisionId) {
                $.get('https://example.com/api/districts?division=' + divisionId, function(data) {
                    var districtSelect = $('#district');
                    districtSelect.empty();
                    districtSelect.append('<option value="">Select District</option>');
                    data.districts.forEach(function(district) {
                        districtSelect.append('<option value="' + district.id + '">' + district.name + '</option>');
                    });
                });
            } else {
                $('#district').empty().append('<option value="">Select District</option>');
                $('#upozila').empty().append('<option value="">Select Upazila</option>');
            }
        });
  
        $('#district').change(function() {
            var districtId = $(this).val();
            if (districtId) {
                $.get('https://example.com/api/upazilas?district=' + districtId, function(data) {
                    var upazilaSelect = $('#upozila');
                    upazilaSelect.empty();
                    upazilaSelect.append('<option value="">Select Upazila</option>');
                    data.upazilas.forEach(function(upazila) {
                        upazilaSelect.append('<option value="' + upazila.id + '">' + upazila.name + '</option>');
                    });
                });
            } else {
                $('#upozila').empty().append('<option value="">Select Upazila</option>');
            }
        });
    });