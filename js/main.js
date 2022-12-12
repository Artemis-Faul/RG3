// ACCORDION
const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute("aria-expanded");

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute("aria-expanded", "false");
  }

  if (itemToggle == "false") {
    this.setAttribute("aria-expanded", "true");
  }
}

items.forEach((item) => item.addEventListener("click", toggleAccordion));

var jsTriggers = document.querySelectorAll(".tab-trigger"),
  jsContents = document.querySelectorAll(".tab-content");

jsTriggers.forEach(function (trigger) {
  trigger.addEventListener("click", function () {
    var id = this.getAttribute("data-tab"),
      content = document.querySelector('.tab-content[data-tab="' + id + '"]'),
      activeTrigger = document.querySelector(".tab-trigger.active"),
      activeContent = document.querySelector(".tab-content.active");

    activeTrigger.classList.remove("active");
    trigger.classList.add("active");

    activeContent.classList.remove("active");
    content.classList.add("active");
  });
});

var examplesSwiper = new Swiper(".examples-swiper", {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  spaceBetween: 10,
  longSwipesRatio: 3,
  breakpoints: {
    768: {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    },
  },
});

var reviewsSwiper = new Swiper(".reviews-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  // autoplay: {
  //   delay: 5000,
  // },
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".reviews__pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var tariffsSwiper = new Swiper(".tariffs__container", {
  slidesPerView: 1,
  paginationClickable: true,
  spaceBetween: 30,
  pagination: {
    el: ".tariffs__pagination",
    clickable: true,
  },
});

const burger = document.querySelector(".header__burger");
const wrap = document.querySelector(".header__nav-wrap");

burger.onclick = function () {
  burger.classList.toggle("header__burger--close");
  wrap.classList.toggle("js-open");
};

jQuery(document).ready(function ($) {
  $(".popup-form__input").focus(function () {
    $(this).parent().addClass("is_focused");
  });
});

/*
$(function () {
  $('.footer__input').mask('+7(000)000-00-00');
  $('.js-mask').mask('+7(000)000-00-00');
});*/

$(".popup-form").submit(function (e) {
  e.preventDefault();
  let form_data = $(this).serializeArray();
  $.ajax({
    type: "POST",
    url: "../../mail.php",
    data: form_data,
    success: function (response) {
      $(".theank-click").click();
    },
    error: function (error) {
      $(".theank-click").click();
    },
  });
  return false;
});

$(".footer-form").submit(function (e) {
  e.preventDefault();
  let form_data = $(this).serializeArray();
  $.ajax({
    type: "POST",
    url: "../../mail.php",
    data: form_data,
    success: function (response) {
      $(".theank-click").click();
    },
    error: function (error) {
      $(".theank-click").click();
    },
  });
  return false;
});

$(".popup-with-form").magnificPopup({
  type: "inline",
  preloader: false,
  focus: "#name",

  // When elemened is focused, some mobile browsers in some cases zoom in
  // It looks not nice, so we disable it:
  callbacks: {
    beforeOpen: function () {
      if ($(window).width() < 700) {
        this.st.focus = false;
      } else {
        this.st.focus = "#name";
      }
    },
  },
});
