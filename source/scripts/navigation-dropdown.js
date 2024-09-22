const toggleButton = document.querySelector('.js-toggle-button');
const dropdownList = document.querySelector('.js-navigation-dropdown');

toggleButton.addEventListener('click', () => {
  dropdownList.hidden = !dropdownList.hidden;
});
