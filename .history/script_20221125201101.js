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

const worksMobile = [
  {
    id: 1,
    title: 'Multi Post Stories One',
    description: '',
    tools: [
      'html',
      'Bootstrap',
      'Ruby on Rails',
    ],
    image: '/images/works/mobile/popup-image.svg',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
  },

  {
    id: 2,
    title: 'Multi Post Stories Two',
    description: '',
    tools: [
      'html',
      'Bootstrap',
      'Ruby on Rails',
    ],
    image: '/images/works/mobile/popup-image.svg',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
  },

  {
    id: 3,
    title: 'Multi Post Stories Three',
    description: '',
    tools: [
      'html',
      'Bootstrap',
      'Ruby on Rails',
    ],
    image: '/images/works/mobile/popup-image.svg',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
  },

  {
    id: 4,
    title: 'Multi Post Stories Four',
    description: '',
    tools: [
      'html',
      'Bootstrap',
      'Ruby on Rails',
    ],
    image: '/images/works/mobile/popup-image.svg',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
  },

  {
    id: 5,
    title: 'Multi Post Stories Five',
    description: '',
    tools: [
      'html',
      'Bootstrap',
      'Ruby on Rails',
    ],
    image: '/images/works/mobile/popup-image.svg',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
  },

  {
    id: 6,
    title: 'Multi Post Stories Six',
    description: '',
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
console.log(featuredWorks);

let works = '';

worksMobile.map((element) => { 
  
  works +=
    ` <div style="margin-bottom: 70px;" class="feature-work" id="feature-work-popup">
        <img class="desktop-image" src="/images/works/desktop/feature-work-desktop.png" alt="Featured Work Desktop" class="featured-work-image">

        <img class="mobile-image" src="/images/works/mobile/featured-work-mobile.svg" alt="Featured Work Mobile" class="featured-work-image">

        <div class="featured-work-text">
          <h3>${element.title}</h3>
          <p>${element.description}</p>
          <div class="featured-work-tags">
            <div class="featured-work-tag">${element.tools[0]}</div>
            <div class="featured-work-tag">${element.tools[1]}</div>
            <div class="featured-work-tag">${element.tools[2]}</div>
            <div class="featured-work-tag">${element.tools[3]}</div>
          </div>
          <!-- Use this button to open pop up window -->
          <button type="button" class="featured-work-button" id="featured-work-button" onclick="openFeatureWorkPopup()">See Project</button>
        </div>
      </div>`
});

featuredWorks.innerHTML = works;