const toggleMenu = document.querySelector('#toggleMenu');
const navLinks = document.querySelector('#nav-links');

// Toggle menu Function
toggleMenu.addEventListener('click', () => {
  navLinks.classList.toggle('show-nav-links');
} );

  // Popup

  const featureWorkPopup = document.getElementById("featured-works-popup");

  function openFeatureWorkPopup() {
    featureWorkPopup.classList.add("featured-works-popup-container");
  }

  function closeFeatureWorkPopup() {
    featureWorkPopup.classList.remove("featured-works-popup-container");
  }

const worksDesktop = [
  {
    id: 1,
    name: '',
    description: '',
    tools: [],
  },

  {
    id: 2,
    name: '',
    description: '',
    tools: [],
  },

  {
    id: 3,
    name: '',
    description: '',
    tools: [],
  },

  {
    id: 4,
    name: '',
    description: '',
    tools: [],
  },

  {
    id: 5,
    name: '',
    description: '',
    tools: [],
  },

  {
    id: 6,
    name: '',
    description: '',
    tools: [],
  },

];

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  
}