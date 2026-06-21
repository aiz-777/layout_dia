'use strict';

const sliderPhoto = document.querySelector('.header__photo');
const prevButton = document.querySelector('.header__slider-button--prev');
const nextButton = document.querySelector('.header__slider-button--next');

const slideClasses = [
  'header__photo--slide-1',
  'header__photo--slide-2',
  'header__photo--slide-3',
];

let currentSlide = 0;

function showSlide(index) {
  sliderPhoto.classList.remove(...slideClasses);

  currentSlide = (index + slideClasses.length) % slideClasses.length;

  sliderPhoto.classList.add(slideClasses[currentSlide]);
}

prevButton.addEventListener('click', () => {
  showSlide(currentSlide - 1);
});

nextButton.addEventListener('click', () => {
  showSlide(currentSlide + 1);
});


