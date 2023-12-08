// Get the section element
sectionEl = document.querySelector("section");

// Add click event listener to section
sectionEl.addEventListener("click", (e) => {
  // Toggle the active class
  sectionEl.classList.toggle("active");
});