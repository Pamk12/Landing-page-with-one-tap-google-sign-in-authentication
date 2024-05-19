var selectElement = document.getElementById('dropdown-menu');

  // Add event listener to show dropdown list on focus
  selectElement.addEventListener('focus', function() {
    this.size = this.length;
  });

  // Add event listener to hide dropdown list when there's no input
  selectElement.addEventListener('input', function() {
    if (this.value === '') {
      this.size = 1;
    }
  });

  // Add event listener to show "Select an option" when the dropdown loses focus
  selectElement.addEventListener('blur', function() {
    this.size = 1;
    if (this.value === '') {
      this.selectedIndex = 0;  // Select the "Select an option" placeholder
    }
  });