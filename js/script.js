// --- Слайдеры, библиотека0 slick-slider ---
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

  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
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


  // Ссылки ПОДРОБНЕЕ / НАЗАД в каталоге
  function toggleSlide(item) {
    $(item).each(function(i) {
      $(this).on('click', function(e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      })
    });
  }

  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');
});                              

  // Меняет содержимое табов при загрузке
if(window.innerWidth < 730) {
  document.getElementById("tab1").innerHTML = "Фитнес";
  document.getElementById("tab2").innerHTML = "Бег";
  document.getElementById("tab3").innerHTML = "Триатлон";
};

  // Меняет содержимое табов при изменении разрешения
  $('document').ready(function() {
    // Начальное состояние
    my_func();
    $(window).resize(function() {
        document.getElementById("tab1").innerHTML = "Фитнес";
        document.getElementById("tab2").innerHTML = "Бег";
        document.getElementById("tab3").innerHTML = "Триатлон";
        my_func();
    });
    function my_func() {
        /**
         * Считываем значение из CSS
         */
        var browserMinWidth = parseInt($('head').css('min-width'), 10);
    }
});


  // Modal
  $('[data-modal="consultation"]').on('click', function() {
    $(".overlay, #consultation").fadeIn('slow');
  });
  $('.modal__close').on('click', function () {
    $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
  });

  $('.button_mini').each(function(i) {
    $(this).on('click', function() {
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
      $(".overlay, #order").fadeIn('slow');
    })
  });

  // JQuery Validation Plugin
  function validateForms(form){
    $(form).validate({
      rules: {
        name: 'required',
        phone: 'required',
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: "Пожалуйста, введите свое имя",
        phone: "Пожалуйста, введите свой номер телефона",
        email: {
          required: "Пожалуйста, введи свою почту",
          email: "Неверный адрес почты"
        }
    }
    })};

    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');

  //Jquery Masked Imput
  $('input[name=phone]').mask('+7 (999) 999-99-99');

  
  $('form').submit(function(e) {
    e.preventDefault();         // Убирает стандартное поведение браузера с формами и отправляет данные на сервер
    $.ajax({                    // Отправляем данные на сервер
      type: 'POST',             // Указываем что мы хотим: Получить данные с сервера или отправить
      url: '../mailer/smart.php',  // Какой обработчик будет обрабатывать запрос
      data: $(this).serialize() // Указываем какие данные отправляем на сервер, подготавливаем перед отправкой на сервер
    }).done(function() {
      $(this).find('input').val('');


      $('form').trigger('reset');
    });
    return false;
  });



