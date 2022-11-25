const toggleMenu = document.querySelector('#toggleMenu');
const navLinks = document.querySelector('#nav-links');

// Toggle menu Function
toggleMenu.addEventListener('click', () => {
  navLinks.classList.toggle('show-nav-links');
} );

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

// eslint-disable-next-line no-plusplus
for (let index = 0; index < famous.length; index++) {
  document.querySelector('.famous-people-loop-holder').innerHTML += `
    <div class="famous__item">
      <div class="famous__item__img">
        <img src="${famous[index].image}" alt="" height="110px" width="120px;" class="">
      </div>
      <div class="famous__item__text">
        <h3 class="title">${famous[index].name}</h3>
        <p class="first-para">${famous[index].firstParagraph}</p>
        <p class="second-para">${famous[index].secondParagraph}</p>
      </div>
    </div>`;
}