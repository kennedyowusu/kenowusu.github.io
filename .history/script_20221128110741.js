const toggleMenu = document.querySelector('#toggleMenu');
const navLinks = document.querySelector('#nav-links');

// Toggle menu Function
toggleMenu.addEventListener('click', () => {
  navLinks.classList.toggle('show-nav-links');
});

// eslint-disable-next-line no-unused-vars, func-names
const openFeatureWorkPopup = function (index) {
  const featureWorkPopup = document.getElementById(`featured-works-popup${index}`);

  featureWorkPopup.classList.toggle('open-feature-work-popup');
};

const worksMobile = [
  {
    id: 1,
    title: 'Multi Post Stories 1',
    tools: [
      'css',
      'html',
      'bootstrap',
      'ruby',
    ],
    image: '/images/works/mobile/popup-image.svg',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy test.',
  },

  {
    id: 2,
    title: 'Multi Post Stories 2',
    tools: [
      'css',
      'html',
      'bootstrap',
      'ruby',
    ],
    image: '/images/works/mobile/popup-image.svg',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy texts.',
  },

  {
    id: 3,
    title: 'Multi Post Stories 3',
    tools: [
      'css',
      'html',
      'bootstrap',
      'ruby',
    ],
    image: '/images/works/mobile/popup-image.svg',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
  },

  {
    id: 4,
    title: 'Multi Post Stories 4',
    tools: [
      'css',
      'html',
      'bootstrap',
      'ruby',
    ],
    image: '/images/works/mobile/popup-image.svg',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
  },

  {
    id: 5,
    title: 'Multi Post Stories 5',
    tools: [
      'css',
      'html',
      'bootstrap',
      'ruby',
    ],
    image: '/images/works/mobile/popup-image.svg',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
  },

  {
    id: 6,
    title: 'Multi Post Stories 6',
    tools: [
      'css',
      'html',
      'bootstrap',
      'ruby',
    ],
    image: '/images/works/mobile/popup-image.svg',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
  },

];

const featuredWorks = document.getElementById('workContainer');

const popWorks = document.getElementById('worksPopups');

let popups = '';
let works = '';

worksMobile.map((element) => {
 
  
});

featuredWorks.innerHTML = works;
popWorks.innerHTML = popups;

// Open and close popup For Desktop
const deskTopPopup = document.getElementById('webPopup');

// eslint-disable-next-line no-unused-vars
function openDesktopPopup() {
  deskTopPopup.classList.add('open-web-popup');
}

// eslint-disable-next-line no-unused-vars
function closeDesktopPopup() {
  deskTopPopup.classList.remove('open-web-popup');
}

function storeUserDataLocally(uName, uEmail, uComment) {
  const userObject = {
    name: uName,
    email: uEmail,
    message: uComment,
  };
  localStorage.setItem(1, JSON.stringify(userObject));
}

const form = document.getElementById('query-form');
const errorMessage = document.getElementById('error');

const fName = form.elements[0];
const uEmail = form.elements[1];
const uMessage = form.elements[2];

form.onsubmit = (event) => {
  if (uEmail.value !== uEmail.value.toLowerCase()) {
    errorMessage.innerText = 'Email Address must be in lowercase only!';
    event.preventDefault();
  } else {
    storeUserDataLocally(fName.value, uEmail.value, uMessage.value);
  }
};

const savedData = JSON.parse(localStorage.getItem(1));
if (savedData !== null) {
  fName.value = savedData.name;
  uEmail.value = savedData.email;
  uMessage.value = savedData.message;
}
