"use strict"; // Enable strict mode for better error checking

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active"); // Toggle the "active" class on the given element
};

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]"); // Select sidebar element by data attribute
const sidebarBtn = document.querySelector("[data-sidebar-btn]"); // Select sidebar toggle button

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar); // Toggle sidebar visibility when button clicked
});

// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]"); // Select all testimonial items
const modalContainer = document.querySelector("[data-modal-container]"); // Modal container element
const modalCloseBtn = document.querySelector("[data-modal-close-btn]"); // Modal close button element
const overlay = document.querySelector("[data-overlay]"); // Overlay behind modal

// modal variable
const modalImg = document.querySelector("[data-modal-img]"); // Modal image element
const modalTitle = document.querySelector("[data-modal-title]"); // Modal title element
const modalText = document.querySelector("[data-modal-text]"); // Modal text content element

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active"); // Toggle modal visibility
  overlay.classList.toggle("active"); // Toggle overlay visibility
};

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src; // Set modal image src to clicked testimonial avatar src
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt; // Set modal image alt attribute
    modalTitle.innerHTML = this.querySelector(
      "[data-testimonials-title]"
    ).innerHTML; // Set modal title text
    modalText.innerHTML = this.querySelector(
      "[data-testimonials-text]"
    ).innerHTML; // Set modal text content

    testimonialsModalFunc(); // Show modal with populated content
  });
}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc); // Close modal on close button click
overlay.addEventListener("click", testimonialsModalFunc); // Close modal when clicking overlay

// custom select variables
const select = document.querySelector("[data-select]"); // Select custom select dropdown button
const selectItems = document.querySelectorAll("[data-select-item]"); // Select all dropdown items
const selectValue = document.querySelector("[data-selecct-value]"); // Element showing selected value (note typo 'selecct')
const filterBtn = document.querySelectorAll("[data-filter-btn]"); // All filter buttons

// toggle custom select dropdown on click
select.addEventListener("click", function () {
  elementToggleFunc(this); // Toggle dropdown active state
});

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase(); // Get clicked item text in lowercase
    selectValue.innerText = this.innerText; // Update displayed selected value text
    elementToggleFunc(select); // Close dropdown
    filterFunc(selectedValue); // Filter projects by selected value
  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]"); // All items that can be filtered

// filter function to show/hide items based on selected category
const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active"); // Show all items if 'all' selected
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active"); // Show item if category matches selected filter
    } else {
      filterItems[i].classList.remove("active"); // Hide item if category does not match
    }
  }
};

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0]; // Store last clicked button to manage active class

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase(); // Get clicked button text in lowercase
    selectValue.innerText = this.innerText; // Update displayed selected value text
    filterFunc(selectedValue); // Filter items based on selected category

    lastClickedBtn.classList.remove("active"); // Remove active class from previously clicked button
    this.classList.add("active"); // Add active class to current clicked button
    lastClickedBtn = this; // Update last clicked button reference
  });
}

// contact form variables
const form = document.querySelector("[data-form]"); // Select contact form element
const formInputs = document.querySelectorAll("[data-form-input]"); // All form input fields
const formBtn = document.querySelector("[data-form-btn]"); // Submit button element

// add event to all form input fields to validate form
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled"); // Enable submit button if form is valid
    } else {
      formBtn.setAttribute("disabled", ""); // Disable submit button if form is invalid
    }
  });
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]"); // All navigation link elements
const pages = document.querySelectorAll("[data-page]"); // All page sections

// add event to all nav link elements for page switching
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active"); // Show the clicked page
        navigationLinks[i].classList.add("active"); // Highlight the active nav link
        window.scrollTo(0, 0); // Scroll to top on page switch
      } else {
        pages[i].classList.remove("active"); // Hide other pages
        navigationLinks[i].classList.remove("active"); // Remove active highlight from other nav links
      }
    }
  });
}
