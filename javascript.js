window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var btn = document.getElementById("back-to-top-btn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


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
  
