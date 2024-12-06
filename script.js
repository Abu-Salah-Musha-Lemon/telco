
  // Function to open dropdown and handle the "We Do" click behavior
  function openDropdown(event) {
    var dropdown = document.getElementById("weDoDropdown");
    // Check if the dropdown is already open
    if (dropdown.classList.contains("show")) {
      return; // If dropdown is open, do nothing
    }

    // If the dropdown is not open, open it
    event.preventDefault();  // Prevent navigation on the click of the "We Do" link
    var dropdownMenu = dropdown.nextElementSibling;
    dropdownMenu.classList.add("show");
  }
