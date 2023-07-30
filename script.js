const dropDownMenu = document.getElementById('drop-down');
const hiddenBarIcon = document.getElementById('hidden-bar');

hiddenBarIcon.addEventListener('click', () => {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains('open');
  hiddenBarIcon.classList = !isOpen ? 'fa-solid fa-bars' : 'fa-solid fa-xmark';
});

function closeNavBar() {
//   dropDownMenu.classList.remove('open');
//   hiddenBarIcon.classList = 'fa-solid fa-bars';
  console.log("sara");
}
