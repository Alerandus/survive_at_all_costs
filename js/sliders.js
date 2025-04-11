const swiper = new Swiper('.swiper', {
    loop: true, // Бесконечный цикл
    slidesPerView: 1, // Один слайд на весь экран
    spaceBetween: 0, // Пробел между слайдами
    autoplay: {
      delay: 5000, // Время задержки между слайдами (5 секунд)
      disableOnInteraction: false, // Не отключать автопрокрутку при взаимодействии
    },
    allowTouchMove: false,
  });