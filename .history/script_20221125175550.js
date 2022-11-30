const toggleMenu = document.querySelector('#toggleMenu');
const navLinks = document.querySelector('#nav-links');

// Toggle menu Function
toggleMenu.addEventListener('click', () => {
  navLinks.classList.toggle('show-nav-links');
} );


// const popup = document.getElementById("popup");

//   function openPopup() {
//     popup.classList.add("active");
//   }

//   function closePopup() {
//     popup.classList.remove("active");
//   }

  // Popup

  const featureWorkPopup = document.getElementById("featured-works-popup");

  function openFeatureWorkPopup() {
    featureWorkPopup.classList.add("open-feature-work-popup");
  }

  function closeFeatureWorkPopup() {
    featureWorkPopup.classList.remove("open-feature-work-popup");
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