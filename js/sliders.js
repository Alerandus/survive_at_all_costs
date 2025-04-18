const swiper = new Swiper('.first-section__swiper', {
    loop: true, // Бесконечный цикл
    slidesPerView: 1, // Один слайд на весь экран
    spaceBetween: 0, // Пробел между слайдами
    autoplay: {
      delay: 5000, // Время задержки между слайдами (5 секунд)
      disableOnInteraction: false, // Не отключать автопрокрутку при взаимодействии
    },
    allowTouchMove: false,
  });


  const swiper1 = new Swiper('.second-section__swiper', {
    slidesPerView: 1, // Один слайд на весь экран
    spaceBetween: 0, // Пробел между слайдами
    speed: 150,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    effect: 'coverflow',

    coverflowEffect: {
      rotate: 0,
      stretch: 440,
      slideShadows: true,
    },
  });