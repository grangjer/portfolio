document.addEventListener("DOMContentLoaded", function() {
  const backToTopBtn = document.getElementById("back-to-top-btn");

  // Show/hide button on scroll
  window.addEventListener("scroll", function() {
      if (window.scrollY > 200) {  // show after scrolling down 200px
          backToTopBtn.style.display = "block";
      } else {
          backToTopBtn.style.display = "none";
      }
  });

  // Smooth scroll to top
  backToTopBtn.addEventListener("click", function() {
      window.scrollTo({
          top: 0,
          behavior: "smooth"
      });
  });
});

function showSidebar() {
    document.getElementById("sidebar").style.right = "0";
}

function hideSidebar() {
    document.getElementById("sidebar").style.right = "-250px";
}

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.contact-form form');
  const thankYou = document.getElementById('thank-you-message');

  if (!form) return;

  form.addEventListener('submit', async function (event) {
    event.preventDefault();

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        form.reset();
        thankYou.style.display = 'block';
      } else {
        alert("Oops! There was a problem submitting your form.");
      }
    } catch (error) {
      console.error(error);
      alert("Oops! There was a problem submitting your form.");
    }
  });
});
