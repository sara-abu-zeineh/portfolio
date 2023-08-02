const dropDownMenu = document.getElementById('drop-down');
const hiddenBarIcon = document.getElementById('hidden-bar');
const sections = document.querySelectorAll('section');
const navList = document.querySelectorAll('.ul-item');
const dropDownNavList = dropDownMenu.querySelectorAll(".dropdown-content a"); 
const circlesContainer = document.querySelector('.animate-circles');
const numberOfCircles = 35;


hiddenBarIcon.addEventListener('click', () => {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');
    hiddenBarIcon.classList = ! isOpen ? 'fa-solid fa-bars' : 'fa-solid fa-xmark';
});

function closeNavBar() {
    dropDownMenu.classList.remove('open');
    hiddenBarIcon.classList = 'fa-solid fa-bars';
    console.log("sara");
}

function getRandomAnimationName() {
  const animations = ['move-up', 'move-down', 'move-left', 'move-right'];
  return animations[Math.floor(Math.random() * animations.length)];
} 

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.7,
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

const createCircle = () => {
  const circle = document.createElement("div");
  circle.classList.add('edu-circle');
  circle.style.width = `${Math.floor(Math.random() * 10) + 2}rem`;
  circle.style.height = circle.style.width;

  const containerWidth = circlesContainer.clientWidth - parseInt(circle.style.width);
  const containerHeight = circlesContainer.clientHeight - parseInt(circle.style.height);
  const randomLeft = Math.max(0, Math.floor(Math.random() * containerWidth));
  let x = (Math.random());
  console.log(x* (containerHeight*-1))
  const randomTop = Math.floor(x *60);
  circle.style.left = `${randomLeft}px`;
  circle.style.top = `${randomTop}rem`;

  const animationName = getRandomAnimationName();
  const animationDuration = `${Math.floor(Math.random() * 20) + 6}s`;
  const animationDelay = `${Math.random()}s`;

  circle.style.animation = `${animationName} ${animationDuration} ${animationDelay} infinite`;

  circlesContainer.appendChild(circle);

}
for(let i = 0 ; i < numberOfCircles ; i++){
  createCircle();
}