// let searchForm = document.querySelector('.search-form');

// document.querySelector('#search-btn').onclick = () =>{
//     searchForm.classList.toggle('active');
//     shoppingCart.classList.remove('active');
//     loginForm.classList.remove('active');
//     navbar.classList.remove('active');
// }

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () => {
  shoppingCart.classList.toggle('active');
  // searchForm.classList.remove('active');
  // loginForm.classList.remove('active');
  navbar.classList.remove('active');
}

// let loginForm = document.querySelector('.login-form');

// document.querySelector('#login-btn').onclick = () =>{
//     // loginForm.classList.toggle('active');
//     // searchForm.classList.remove('active');
//     shoppingCart.classList.remove('active');
//     navbar.classList.remove('active');
// }

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active');
  // searchForm.classList.remove('active');
  shoppingCart.classList.remove('active');
  // loginForm.classList.remove('active');
}

window.onscroll = () => {
  // searchForm.classList.remove('active');
  shoppingCart.classList.remove('active');
  // loginForm.classList.remove('active');
  navbar.classList.remove('active');
}

var swiper = new Swiper(".box-container", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper(".product-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 4,
    },
  },
});


var swiper = new Swiper('.offers-slider', {
  slidesPerView: 4,
  direction: getDirection(),
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    resize: function () {
      swiper.changeDirection(getDirection());
    },
  },
});
function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth <= 768 ? 'vertical' : 'horizontal';

  return direction;
}


var swiper = new Swiper(".review-slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".banner-Swiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});



const productOffersContainers = [...document.querySelectorAll('.product-offers-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productOffersContainers.forEach((item, i) => {
  let containerDimenstions = item.getBoundingClientRect();
  let containerWidth = containerDimenstions.width;

  nxtBtn[i].addEventListener('click', () => {
    item.scrollLeft += containerWidth;
  })

  preBtn[i].addEventListener('click', () => {
    item.scrollLeft -= containerWidth;
  })
})


const Shuffle = window.Shuffle;

const myShuffle = new Shuffle(document.querySelector('.my-shuffle'), {
  itemSelector: '.js-item',
  sizer: '.js-sizer',
  buffer: 1,
});