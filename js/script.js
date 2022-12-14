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
          name: {
            required: true,
            minlength: 2
          },
          phone: 'required',
          email: {
            required: true,
            email: true
          }
        },
        messages: {
          required: true,
          name: {
            required: "Пожалуйста, введите свое имя",
            minlength: jQuery.validator.format("Введите {0} символа!")
          },
          phone: "Пожалуйста, введите свой номер телефона",
          email: {
            required: "Пожалуйста, введи свою почту",
            email: "Неверный адрес почты"
          }
        },
      })};

      validateForms('#consultation-form');
      validateForms('#consultation form');
      validateForms('#order form');
  
  //Jquery Masked Imput
  $('input[name=phone]').mask('+7 (999) 999-99-99');

  // PHP Mailer
  $('form').submit(function(e) {
    e.preventDefault();
    let send = true;
    $('form >label.error').each(function(){
        if($(this).text() != ''){
           $(this).css('border-color','red');
           send = false;
        }
    });

    if(!send) return false;

    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        $('#consultation, #order').fadeOut();
        $('.overlay, #thanks').fadeIn('slow');

        $('form').trigger('reset');
    });
    return false;
});


  // Smooth scroll and pageup

  $(window).scroll(function() {
    if ($(this).scrollTop() > 1600) {
      $('.pageup').fadeIn();
    } else {
      $('.pageup').fadeOut();
    }
  });

  $("a[href='#up'").click(function() {
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
  });

  // Активируем плагин WOW.JS
  new WOW().init();

  // Lazyload для yandex maps
  let YaMapsShown = false; 

  $(document).ready(function (){

    $(window).scroll(function() {
      if (!YaMapsShown){
      if($(window).scrollTop() + $(window).height() > $(document).height() - 1300) {      
        showYaMaps();
        YaMapsShown = true;
      }
      }
  });
  });

  function showYaMaps(){
  let script   = document.createElement("script");
  script.src   = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A3d99d5a4aa53889aba13f7a4f599f7b0343a18a999ed426411c91ede6b8c8f92&amp;width=100%25&amp;height=630&amp;lang=ru_RU&amp;scroll=false";
  document.getElementById("YaMaps").appendChild(script);
  }
});                              

