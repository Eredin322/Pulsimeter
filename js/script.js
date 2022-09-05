// --- КОД slick ---
$(document).ready(function(){     // Отвечает за то, чтобы мы загружали наш слайдер только когда наш документ полностью. $ - библиотека JQuery
  $('.carousel__inner').slick({   // Обращаемся к классу carousel__inner. slick() это метод, который позволяет запустить наш slick слайдер
    speed: 1200,                  // Speed of slide scrolling
    adaptiveHeight: true,         // Высота карусели подстраивается
    prevArrow: '<button type="button" class="prev"><img src="icons/arrow-left.svg"></button>',
    nextArrow: '<button type="button" class="next"><img src="icons/arrow-right.svg"></button>',
    useCSS: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: true,
          arrows: false,
          respondTo: ".container"
        }
      }
    ]
  }); 
});                              

// <!-- Список дополнительных настроек разобранных в уроке -->
//dots: true,                 // Кружочки под слайдеров
//infinite: true,             // Бесконечная прокрутка, default setting, can be removed
//slidesToShow: 1,            // Сколько показывать слайдеров. 1 by default
//autoplay: true,             // Автоматическая прокрутка слайдеров
//autoplaySpeed: 1000,        // Скорость автоматической прокрутки
//fade: true,                 // Картинка проявляется с заднего фона
//cssEase: 'linear',          // Характер поведения анимации. Emergence of image occurs равномерно
//arrows: false               // Убирает стрелки слайдера