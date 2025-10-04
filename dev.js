document.querySelectorAll(".more-btn").forEach((button) => {
  button.addEventListener("click", () => {
    let info = button.nextElementSibling;

    if (info.style.display === "block") {
      info.style.display = "none";
      button.textContent = "More";
    } else {
      info.style.display = "block";
      button.textContent = "Less";
    }
  });
});
