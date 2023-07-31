const dropDownMenu = document.getElementById('drop-down');
const hiddenBarIcon = document.getElementById('hidden-bar');
const sections = document.querySelectorAll('section');
const navList = document.querySelectorAll('.ul-item');
const dropDownNavList = dropDownMenu.querySelectorAll(".dropdown-content a"); // Updated selection


hiddenBarIcon.addEventListener('click', () => {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');
    hiddenBarIcon.classList = ! isOpen ? 'fa-solid fa-bars' : 'fa-solid fa-xmark';
});

function closeNavBar() {
    // dropDownMenu.classList.remove('open');
    // hiddenBarIcon.classList = 'fa-solid fa-bars';
    console.log("sara");
}

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.7, // Increase the threshold to 0.7 for a more substantial intersection requirement
};

const sectionObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const currentSectionId = entry.target.getAttribute("id");

      navList.forEach((link) => {
        const href = link.querySelector("a").getAttribute("href");
        if (href === `#${currentSectionId}` || (currentSectionId === "" && href === "#home")) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });

      dropDownNavList.forEach((link) => { 
        const href = link.getAttribute("href");
        if (href === `#${currentSectionId}` || (currentSectionId === "" && href === "#home")) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });

      if (currentSectionId) {
        const url = `#${currentSectionId}`;
        history.replaceState({}, '', url);
      } else {
        history.replaceState({}, '', window.location.href.split('#')[0]);
      }
    }
  });
}, observerOptions);

sections.forEach((section) => {
  sectionObserver.observe(section);
});


const circles = document.querySelectorAll('.circle'); 

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-circle'); 
    } else {
      entry.target.classList.remove('animate-circle'); 
    }
  });
});

circles.forEach(circle => {
  observer.observe(circle); 
});
