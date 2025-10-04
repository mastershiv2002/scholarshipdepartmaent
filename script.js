// Toggle navigation menu for mobile
document.querySelector(".menu-toggle").addEventListener("click", function () {
  document.querySelector(".nav-links").classList.toggle("active");
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Form validation for the scholarship application (if applicable)
document.querySelector(".apply-button").addEventListener("click", function (e) {
  // Example: Redirect to the application page
  window.location.href = "index2.html";
});

// Dynamic content loading (example: load announcements from an API)
async function loadAnnouncements() {
  try {
    const response = await fetch("https://api.example.com/announcements");
    const data = await response.json();
    const announcementsSection = document.querySelector("#announcements");

    if (data.length > 0) {
      announcementsSection.innerHTML = "<h2>Announcements</h2>";
      data.forEach((announcement) => {
        announcementsSection.innerHTML += `<p>${announcement.message}</p>`;
      });
    } else {
      announcementsSection.innerHTML = "<h2>No announcements available</h2>";
    }
  } catch (error) {
    console.error("Error loading announcements:", error);
  }
}

// Call the function to load announcements (if needed)
// loadAnnouncements();

// Social media link hover effects
document.querySelectorAll(".social-links a").forEach((link) => {
  link.addEventListener("mouseenter", function () {
    this.style.transform = "scale(1.1)";
  });
  link.addEventListener("mouseleave", function () {
    this.style.transform = "scale(1)";
  });
});

// Footer year update (dynamic copyright year)
document.querySelector(
  ".footer-bottom p"
).innerHTML = `&copy; ${new Date().getFullYear()} Scholarship Department, SRTMUN. All rights reserved.`;
