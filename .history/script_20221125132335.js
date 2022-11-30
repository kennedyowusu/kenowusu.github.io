const toggleMenu = document.querySelector('#toggleMenu');
const navLinks = document.querySelector('#nav-links');

// Toggle menu Function
toggleMenu.addEventListener('click', () => {
  navLinks.classList.toggle('show-nav-links');
 } );

 const worksMobile = [
  {
    id: 1,
    title: 'Professional Art Printing Data More',
    image: './images/celebrities/bill.jpeg',
    firstParagraph: 'The Porsche Club of America is the largest single-marque ',
    secondParagraph: 'The Porsche Club of America is the largest single-marque is a great automobile',
  },

  {
    id: 2,
    name: 'Evans Charles',
    image: './images/celebrities/cyrus.jpeg',
    firstParagraph: 'The Porsche Club of America is the largest single-marque ',
    secondParagraph: 'The Porsche Club of America is the largest single-marque',
  },

  {
    id: 3,
    name: 'Fredrick Smith',
    image: './images/celebrities/gwen.jpeg',
    firstParagraph: 'The Porsche Club of America is the largest single-marque ',
    secondParagraph: 'The Porsche Club of America is the largest single-marque is a great automobile',
  },

  {
    id: 4,
    name: 'Alexis Smith',
    image: './images/celebrities/kate.jpeg',
    firstParagraph: 'The Porsche Club of America is the largest single-marque ',
    secondParagraph: 'The Porsche Club of America is the largest single-marque',
  },

  {
    id: 5,
    name: 'Alexander Foster',
    image: './images/celebrities/levine.jpeg',
    firstParagraph: 'The Porsche Club of America is the largest single-marque ',
    secondParagraph: 'The Porsche Club of America is the largest single-marque is a great automobile',
  },

  {
    id: 6,
    name: 'John Banascoe',
    image: './images/celebrities/paula.jpeg',
    firstParagraph: 'The Porsche Club of America is the largest single-marque ',
    secondParagraph: 'The Porsche Club of America is the largest single-marque ',
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