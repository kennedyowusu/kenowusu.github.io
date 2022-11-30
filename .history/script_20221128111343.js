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
    image: '/images/works/mobile/featured-work-mobile.svg',
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
    image: '/images/works/mobile/featured-work-mobile.svg',
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
    image: '/images/works/mobile/featured-work-mobile.svg',
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
    image: '/images/works/mobile/featured-work-mobile.svg',
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
    image: '/images/works/mobile/featured-work-mobile.svg',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
  },

];

const featuredWorks = document.getElementById('workContainer');

const popWorks = document.getElementById('worksPopups');

let popups = '';
let works = '';

worksMobile.map((element) => {
  works
    += ` <div style="margin-bottom: 141px;" class="feature-work feature-work-desktop" id="${`feature-work-popup${element.id}`}">
        <img class="mobile-image" src="/images/works/mobile/featured-work-mobile.svg" alt="Featured Work Mobile" class="featured-work-image">

        <div class="featured-work-text">
          <h3>${element.title}</h3>
          <p>${element.description}</p>
          <div class="featured-work-tags">
            ${element.tools.map((tool) => `<div class="featured-work-tag">${tool}</div>`)}
          </div>
          
          <button type="button" class="featured-work-button" onclick="openFeatureWorkPopup(${element.id})">See Project</button>
        </div>
      </div>`;

  popups += `
  <div class="featured-works-popup" id="${`featured-works-popup${element.id}`}">
      <!-- Heading Here -->
      <div class="featured-works-popup-heading">
        <h2 class="featured-works-popup-title" id="featured-works-popup-title">${element.title}</h2>
        </h2>
        <i class="fas fa-close" onclick="openFeatureWorkPopup(${element.id})"></i>
      </div>

      <!-- 3 Tags Here -->
      <div class="featured-work-tags-popup">
        ${element.tools.map((tool) => `<div class="featured-work-tag-popup">${tool}</div>`)}
      </div>

      <!-- Image Here -->
      <div class="featured-works-popup-image">
        
        <img class="mobile-image-popup" src="${element.image}" alt="Featured Work Mobile" class="featured-works-popup-img" id="featured-works-popup-img">
      </div>

      <!-- Text Here -->
      <div class="featured-works-popup-text">
        <p class="featured-works-popup-para" id="featured-works-popup-para">
          ${element.description}
        </p>
      </div>

      <!-- 2 Buttons Here -->
      <div class="featured-works-popup-btns">
        <a href="#" class="featured-works-popup-btn" id="featured-works-popup-btn">
          <p class="btn-text-popup">
            See Live
          </p>
          <!-- add ref -->
          <img class="eclipse-image-popup" src="/images/works/mobile/Icon.svg" alt="Button Icon" id="eclipse-image-popup">
        </a>

        <a href="#" class="featured-works-popup-btn" id="featured-works-popup-btn">
          <p class="btn-text-popup">
            See Live
          </p>
          <!-- add ref -->
          <img class="eclipse-image-popup" src="/images/social-media-icons/github-light.svg" alt="Button Icon" id="eclipse-image-popup">
        </a>
      </di>

      </div>
    </div>`;
});

featuredWorks.innerHTML = works;
popWorks.innerHTML = popups;

// Open and close popup For Desktop
// const deskTopPopup = document.getElementById('webPopup');

// function openDesktopPopup() {
//   deskTopPopup.classList.add('open-web-popup');
// }

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
