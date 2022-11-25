const toggleMenu = document.querySelector('#toggleMenu');
const navLinks = document.querySelector('#nav-links');

// Toggle menu Function
toggleMenu.addEventListener('click', () => {
  navLinks.classList.toggle('show-nav-links');
} );

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
    title: 'Multi Post Stories',
    description: '',
    tools: [
      'html',
      'Bootstrap',
      'Ruby on Rails',
    ],
    image: '/images/works/mobile/popup-image.svg',
    'description-1': 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
  },

  {
    id: 2,
    title: '',
    description: '',
    tools: [],
  },

  {
    id: 3,
    title: '',
    description: '',
    tools: [],
  },

  {
    id: 4,
    title: '',
    description: '',
    tools: [],
  },

  {
    id: 5,
    title: '',
    description: '',
    tools: [],
  },

  {
    id: 6,
    title: '',
    description: '',
    tools: [],
  },

];

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  
}