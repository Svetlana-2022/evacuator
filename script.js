// const cards = document.querySelectorAll('.card');
// карточки
const cardsGroup = document.querySelector('.cards__groups');
const cardTemplate = document.querySelector('.card-template').content;
const initialCards = [
    { 
      url: "./images/block-1-photo-1.jpg",
      price1: "5 000 руб",
      price2: "3 000 руб",
      price3: "нет",
      price4: "нет",
      price5: "50 руб/км",
      description: "Эвакуатор авто. Всегда на связи! Быстро и надежно"
    },
    { 
      url: "./images/block-1-photo-2.jpg",
      price1: "4 000 руб",
      price2: "3 000 руб",
      price3: "4 000 руб",
      price4: "6 000 руб",
      price5: "50 руб/км",
      description: "Круглосуточно. Стоянка в районе метро Технопарк, быстро доберусь в любую точку города."
    },
    { 
      url: "./images/block-1-photo-1.jpg",
      price1: "5 000 руб",
      price2: "3 000 руб",
      price3: "нет",
      price4: "нет",
      price5: "50 руб/км",
      description: "Эвакуатор авто. Всегда на связи! Быстро и надежно"
    },
    { 
      url: "./images/block-1-photo-2.jpg",
      price1: "4 000 руб",
      price2: "3 000 руб",
      price3: "4 000 руб",
      price4: "6 000 руб",
      price5: "50 руб/км",
      description: "Круглосуточно. Стоянка в районе метро Технопарк, быстро доберусь в любую точку города."
    },
    { 
      url: "./images/block-1-photo-1.jpg",
      price1: "5",
      price2: "3 000 руб",
      price3: "нет",
      price4: "нет",
      price5: "50 руб/км",
      description: "Эвакуатор авто. Всегда на связи! Быстро и надежно"
    },
    { 
      url: "./images/block-1-photo-2.jpg",
      price1: "4",
      price2: "3 000 руб",
      price3: "4 000 руб",
      price4: "6 000 руб",
      price5: "50 руб/км",
      description: "Круглосуточно. Стоянка в районе метро Технопарк, быстро доберусь в любую точку города."
    },
    { 
      url: "./images/block-1-photo-1.jpg",
      price1: "5",
      price2: "3 000 руб",
      price3: "нет",
      price4: "нет",
      price5: "50 руб/км",
      description: "Эвакуатор авто. Всегда на связи! Быстро и надежно"
    },
    { 
      url: "./images/block-1-photo-2.jpg",
      price1: "4",
      price2: "3 000 руб",
      price3: "4 000 руб",
      price4: "6 000 руб",
      price5: "50 руб/км",
      description: "Круглосуточно. Стоянка в районе метро Технопарк, быстро доберусь в любую точку города."
    },
    { 
      url: "./images/block-1-photo-1.jpg",
      price1: " руб",
      price2: "3 000 руб",
      price3: "нет",
      price4: "нет",
      price5: "50 руб/км",
      description: "Эвакуатор авто. Всегда на связи! Быстро и надежно"
    },
    { 
      url: "./images/block-1-photo-2.jpg",
      price1: " руб",
      price2: "3 000 руб",
      price3: "4 000 руб",
      price4: "6 000 руб",
      price5: "50 руб/км",
      description: "Круглосуточно. Стоянка в районе метро Технопарк, быстро доберусь в любую точку города."
    },
    { 
      url: "./images/block-1-photo-1.jpg",
      price1: " руб",
      price2: "3 000 руб",
      price3: "нет",
      price4: "нет",
      price5: "50 руб/км",
      description: "Эвакуатор авто. Всегда на связи! Быстро и надежно"
    },
    { 
      url: "./images/block-1-photo-2.jpg",
      price1: " руб",
      price2: "3 000 руб",
      price3: "4 000 руб",
      price4: "6 000 руб",
      price5: "50 руб/км",
      description: "Круглосуточно. Стоянка в районе метро Технопарк, быстро доберусь в любую точку города."
    },
    { 
      url: "./images/block-1-photo-1.jpg",
      price1: "0",
      price2: "3 000 руб",
      price3: "нет",
      price4: "нет",
      price5: "50 руб/км",
      description: "Эвакуатор авто. Всегда на связи! Быстро и надежно"
    },
    { 
      url: "./images/block-1-photo-2.jpg",
      price1: "0",
      price2: "3 000 руб",
      price3: "4 000 руб",
      price4: "6 000 руб",
      price5: "50 руб/км",
      description: "Круглосуточно. Стоянка в районе метро Технопарк, быстро доберусь в любую точку города."
    },
    { 
      url: "./images/block-1-photo-1.jpg",
      price1: " ",
      price2: "3 000 руб",
      price3: "нет",
      price4: "нет",
      price5: "50 руб/км",
      description: "Эвакуатор авто. Всегда на связи! Быстро и надежно"
    },
    { 
      url: "./images/block-1-photo-2.jpg",
      price1: " ",
      price2: "3 000 руб",
      price3: "4 000 руб",
      price4: "6 000 руб",
      price5: "50 руб/км",
      description: "Круглосуточно. Стоянка в районе метро Технопарк, быстро доберусь в любую точку города."
    },
];
  // для слайдера
let offset = 0; //смещение от левого края
let dotIndex = 1; // слайд
const sliderLine = document.querySelector('.slider__line');
const btnPrev = document.querySelector('.slider__btn_prev');
const btnNext = document.querySelector('.slider__btn_next');
const dotPrev = document.querySelector('.slider__btn_prev-dot');
const dotNext = document.querySelector('.slider__btn_next-dot');
// кнопки
const buttonAnnouncemes = document.querySelectorAll('.button-announceme');
const content = document.querySelector('.content');
const buttonPrices1 = document.querySelector('.price__button1');
const buttonPrices2 = document.querySelector('.price__button2');
const contentPrice1 = document.querySelector('.price__check-content-1');
const contentPrice2 = document.querySelector('.price__check-content-2');
const contentPrice = document.querySelector('.price__content');
const contentAnnounceme = document.querySelector('.announceme-content');
const arrowTops = document.querySelectorAll('.arrow-top');
// для бургера
const burgerOpen = document.querySelector('.header__burger');
const burger = document.querySelector('.burger');
const burgerClose = burger.querySelector('.burger__button');

// кнопки со слушателями
buttonAnnouncemes.forEach((button) => {
  button.addEventListener('click', function() {
    content.classList.toggle('content_hidden');
    contentAnnounceme.classList.toggle('content_hidden');
  })
});

buttonPrices2.addEventListener('click', function() {
    contentPrice1.classList.add('price__content_hidden');
    contentPrice2.classList.remove('price__content_hidden');
    contentPrice.classList.add('price__content-2');
    buttonPrices2.classList.add('price__button_active');
    buttonPrices1.classList.remove('price__button_active');
});  

buttonPrices1.addEventListener('click', function() {
    contentPrice2.classList.add('price__content_hidden');
    contentPrice1.classList.remove('price__content_hidden');
    contentPrice.classList.remove('price__content-2');
    buttonPrices1.classList.add('price__button_active');
    buttonPrices2.classList.remove('price__button_active');
});

// создание карточки
function createCard(card) {
  const element = cardTemplate.querySelector('.card').cloneNode(true);
  const elImage = element.querySelector('.card__image');
  elImage.src = card.url;
  const elPrice1 = element.querySelector('.card__price1');
  elPrice1.textContent = card.price1;
  const elPrice2 = element.querySelector('.card__price2');
  elPrice2.textContent = card.price2;
  const elPrice3 = element.querySelector('.card__price3');
  elPrice3.textContent = card.price3;
  const elPrice4 = element.querySelector('.card__price4');
  elPrice4.textContent = card.price4;
  const elPrice5 = element.querySelector('.card__price5');
  elPrice5.textContent = card.price5;
  const elDescription = element.querySelector('.card__description');
  elDescription.textContent = card.description;

  return element;
}
function inserstCard(element) {
  cardsGroup.append(createCard(element));  
}
  
// initialCards.forEach(function(card){
//   inserstCard(card);
// });

// пагинация
document.addEventListener('DOMContentLoaded', function () {
// отображение кол-ва карточек на странице 
const itemsPerPage = 4;
// страница показанная
let currentPage = 0;

// показ страницы с карточками
function showPage(page) {
  const startIndex = page * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  let notes = initialCards.slice(startIndex, endIndex);
  console.log(notes);
  notes.forEach(function(card){

    inserstCard(card);
  });
  updateActiveButtonStates();  
}
function hideOldPage() {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => card.classList.add('hidden'));
}
function createPageButtons() {
  //колличество страниц
  let countOfItems = Math.ceil(initialCards.length / itemsPerPage);
  const paginationButtons = document.querySelector('.pagination-buttons');
  
  for (let i = 0; i < countOfItems; i++) {
    let pageButton = document.createElement('button');
    pageButton.classList.add('pagination__button');
    pageButton.textContent = i + 1;
    console.log(pageButton, 'pageButton-1');
    pageButton.addEventListener('click', () => {
      currentPage = i;
      hideOldPage();
      showPage(currentPage);
      updateActiveButtonStates();
    });
    paginationButtons.appendChild(pageButton);
    console.log(pageButton, 'pageButton-2', paginationButtons);
  }
}
function updateActiveButtonStates() {
  const pageButtons = document.querySelectorAll('.pagination__button');
  pageButtons.forEach((button, index) => {
      console.log(pageButtons, button, index);
    if (index === currentPage) {
      button.classList.add('pagination__button_active');
    } else {
      button.classList.remove('pagination__button_active');
    }
  });
}
createPageButtons();
showPage(currentPage);
});

// кнопка скрола вверх
arrowTops.forEach((arrowTop) => {
    arrowTop.onclick = function() {
      window.scrollTo(scrollX, 0, {behavior: 'smooth'});
    };
    // после scrollTo возникнет событие "scroll", так что стрелка автоматически скроется
    window.addEventListener('scroll', function() {
      arrowTop.hidden = (scrollY < document.documentElement.clientHeight);
    });
});

// для слайдера слушатели
btnPrev.addEventListener('click', () => {
  offset = offset - 100; // offset -=  //сдвиг слайда
  dotIndex --;
  if(offset < 0) {
      offset = 100;
      dotIndex = 2;
  }
  sliderLine.style.left = - offset + '%';
  currentSlide(dotIndex);
});
btnNext.addEventListener('click', () => {
  offset = offset + 100; // offset += //сдвиг слайда
  dotIndex ++;
  if(offset > 100) {
      offset = 0;
      dotIndex = 1;
  }
  sliderLine.style.left = - offset + '%';
  currentSlide(dotIndex);
});

function currentSlide(n) {
  if(n === 1) {
      dotPrev.classList.add('slider__dot_active');
      dotNext.classList.remove('slider__dot_active');
  } else if(n === 2) {
      dotNext.classList.add('slider__dot_active');
      dotPrev.classList.remove('slider__dot_active');
  }
};
currentSlide(dotIndex);
  

// для бургера
burgerOpen.addEventListener('click', () => {
  burger.classList.add('burger_open');
});
burgerClose.addEventListener('click', () => {
  burger.classList.remove('burger_open');
});


