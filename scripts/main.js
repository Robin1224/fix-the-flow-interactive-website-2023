// Get the section element
sectionEl = document.querySelector("section");

// Add click event listener to section
sectionEl.addEventListener("click", (e) => {
  // Toggle the active class
  sectionEl.classList.toggle("active");
});

pagecontainerEl = document.querySelector(".page-container");
page1Btn = document.querySelector(".donate-now");
page2Btn = document.querySelector(".btn-back");

page1Btn.addEventListener("click", (e) => {
  pagecontainerEl.dataset.page = "2";
});

page2Btn.addEventListener("click", (e) => {
  pagecontainerEl.dataset.page = "1";
});

amountInputEl = document.querySelector(".amount-input");
amountBtn1 = document.querySelector(".donation-buttons > button:nth-of-type(1)");
amountBtn2 = document.querySelector(".donation-buttons > button:nth-of-type(2)");
amountBtn3 = document.querySelector(".donation-buttons > button:nth-of-type(3)");

amountBtn1.addEventListener("click", (e) => {
  e.preventDefault();
  amountInputEl.value = "2";
});

amountBtn2.addEventListener("click", (e) => {
  e.preventDefault();
  amountInputEl.value = "5";
});

amountBtn3.addEventListener("click", (e) => {
  e.preventDefault();
  amountInputEl.value = "10";
});