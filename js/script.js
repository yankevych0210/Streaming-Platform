document.addEventListener('DOMContentLoaded', function () {
  const togglePassword = document.querySelector('.toggle-password');
  const passwordInput = document.querySelector('#password');

  togglePassword.addEventListener('click', function () {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);

    if (type === 'password') {
      togglePassword.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
          <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
          <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
        </svg>
      `;
    } else {
      togglePassword.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
          <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z"/>
          <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"/>
          <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z"/>
        </svg>
      `;
    }
  });

  document.getElementById('dob').addEventListener('input', function (e) {
    let input = e.target.value.replace(/\D/g, '').substring(0, 8);
    let day = input.substring(0, 2);
    let month = input.substring(2, 4);
    let year = input.substring(4, 8);

    if (day > 31) day = '31';
    if (month > 12) month = '12';
    const currentYear = new Date().getFullYear();
    if (year > currentYear) year = currentYear.toString();

    if (input.length > 4) {
      e.target.value = `${day}/${month}/${year}`;
    } else if (input.length > 2) {
      e.target.value = `${day}/${month}`;
    } else if (input.length > 0) {
      e.target.value = `${day}`;
    }
  });

  document.getElementById('dob').addEventListener('keypress', function (e) {
    if (!/\d/.test(e.key)) {
      e.preventDefault();
    }
  });

  function updateClass() {
    const swiperElements = document.querySelectorAll('.communication-slider, .streamers-slider');
    swiperElements.forEach((swiperElement) => {
      if (window.innerWidth < 767) {
        swiperElement.classList.add('container');
      } else {
        swiperElement.classList.remove('container');
      }
    });
  }

  updateClass();

  window.addEventListener('resize', updateClass);
  window.addEventListener('load', updateClass);

  const dynamicLinks = document.querySelectorAll('a[href="#dynamic-form"]');

  function updateFormLink() {
    const targetForm = window.innerWidth < 767 ? '#mobile-form' : '#desktop-form';
    dynamicLinks.forEach((link) => {
      link.setAttribute('href', targetForm);
    });
  }

  updateFormLink();
  window.addEventListener('resize', updateFormLink);

  const streamersSlider = new Swiper('.streamers-slider', {
    slidesPerView: 3,
    initialSlide: 0,
    spaceBetween: 15,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    speed: 1000,
    centeredSlides: false,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });

  const communicationSlider = new Swiper('.communication-slider', {
    slidesPerView: 4,
    initialSlide: 0,
    spaceBetween: 15,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    speed: 1000,
    centeredSlides: false,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 4,
      },
    },
  });

  const hereSlider = new Swiper('.why-join__slider', {
    slidesPerView: 1,
    initialSlide: 0,
    spaceBetween: 15,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    speed: 1000,
    centeredSlides: false,
  });

  const swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination.lines-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return `<span class="${className}"></span>`;
      },
    },
    speed: 500,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    on: {
      init: function () {
        const sliderElement = this.el;
        sliderElement.addEventListener('mouseenter', () => {
          this.autoplay.stop();
        });
        sliderElement.addEventListener('mouseleave', () => {
          this.autoplay.start();
        });
      },
    },
  });
});
