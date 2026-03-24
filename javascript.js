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
    var sidebar = document.getElementById("sidebar");
    sidebar.style.display = 'flex';
  }
  
  function hideSidebar() {
    var sidebar = document.getElementById("sidebar");
    sidebar.style.display = 'none';
  }
  

  