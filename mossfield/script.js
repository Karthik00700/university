  // Mark the current page's nav link as active
  // We read the filename from the URL to figure out which page we're on
  function setActiveNav() {
    var path = window.location.pathname;
    var file = path.split("/").pop(); // e.g. "research.html"

    var links = document.querySelectorAll("nav ul li a");

    links.forEach(function (link) {
      var href = link.getAttribute("href");
      if (href === file) {
        link.classList.add("active");
      }
    });
  }

  setActiveNav();


  // Contact form — runs only on contact.html
  function submitForm() {
    var name  = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();

    if (name === "" || email === "") {
      alert("Please fill in your name and email before sending.");
      return;
    }

    document.getElementById("contactForm").style.display = "none";
    document.getElementById("successMessage").style.display = "block";
  }
