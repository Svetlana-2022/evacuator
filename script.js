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
// document.addEventListener('DOMContentLoaded', function () {
//   const cardsGroups = document.querySelector('.cards__groups');
const pageButtons = document.querySelectorAll('.pagination__button');
// отображение кол-ва карточек на странице 
const itemsPerPage = 4;
// страница показанная
let currentPage = 0;
//колличество страниц
let countOfItems = Math.ceil(initialCards.length / itemsPerPage);

  // const items = Array.from(cardsGroups.getElementsByTagName('li')).slice(0);
// показ страницы с карточками
function showPage(page) {
  const startIndex = page * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  let notes = initialCards.slice(startIndex, endIndex);
  console.log(notes);
  notes.forEach(function(card){

    inserstCard(card);
  });  
}
function hideOldPage() {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => card.classList.add('hidden'));
  
}
showPage(currentPage);
for (let i = 0; i < countOfItems; i++) {
  pageButtons.forEach((button, index) => {
    if(index === i) {
      button.addEventListener('click', () => {
          currentPage = i;
          hideOldPage();
          showPage(currentPage);
          updateActiveButtonStates();
      });
    }
  })
  // for (let item of pageButtons) {
  //   item.addEventListener('click', () => {
  //     currentPage = i;
  //     showPage(currentPage);
  //     updateActiveButtonStates();
  //   });
  // }
}
//TODO //TODO //TODO //TODO                 //TODO //TODO
// let items = [];
// for (let i = 1; i <= countOfItems; i++) {
// 	let li = document.createElement('li');
// 	li.innerHTML = i;
// 	pagination.appendChild(li);
// 	items.push(li);
// }

// showPage(items[0]);

// for (let item of items) {
// 	item.addEventListener('click', function() {
// 		showPage(this);
// 	});
// }
// for (let i = 0; i < countOfItems; i++) {
  // const pageButton = document.createElement('button');
  // pageButton.textContent = i + 1;
//   pageButton.addEventListener('click', () => {
//     currentPage = i;
//     showPage(currentPage);
//     updateActiveButtonStates();
//   });
// }
// for (let item of pageButtons) {
// 	item.addEventListener('click', function() {
// 		showPage(this);
// 	});
// }

// function createPageButtons() {
//   const totalPages = Math.ceil(items.length / itemsPerPage);
//   const paginationContainer = document.createElement('div');
//   const paginationDiv = document.body.appendChild(paginationContainer);
//   paginationContainer.classList.add('pagination');

  // Add page buttons
  // for (let i = 0; i < totalPages; i++) {
  //   const pageButton = document.createElement('button');
  //   pageButton.textContent = i + 1;
  //   pageButton.addEventListener('click', () => {
  //     currentPage = i;
  //     showPage(currentPage);
  //     updateActiveButtonStates();
  //   });

//       cardsGroups.appendChild(paginationContainer);
//       paginationDiv.appendChild(pageButton);
//     }
// }
//  обновление активной кнопки
function updateActiveButtonStates() {
  pageButtons.forEach((button, index) => {
    if (index === currentPage) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
}

//   createPageButtons(); // Call this function to create the page buttons initially
//   showPage(currentPage);
// });

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


