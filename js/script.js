// ハンバーガーメニューのを押したときに閉じる
jQuery('#js-drawer-content a[href^="#"]').on("click", function (e) {
    jQuery("#js-drawer-icon").removeClass("is-checked");
    jQuery("#js-drawer-content").removeClass("is-checked");
  });

// ドロワーの表示
jQuery("#js-drawer-icon").on("click", function (e) {
  e.preventDefault();
  jQuery("#js-drawer-icon").toggleClass("is-checked");
  jQuery("#js-drawer-content").toggleClass("is-checked");

  if (jQuery("#js-drawer-icon").hasClass("is-checked")) {
      // スクロールを無効にする
      jQuery("body").css("overflow", "hidden");
  } else {
      // スクロールを有効に戻す
      jQuery("body").css("overflow", "auto");
  }
});

var swiper = new Swiper('.swiper', {
  autoplay: {
    delay: 0,
  },
  loop: true,
  speed: 3000,
  slidesPerView: 3.5,
  centeredSlides: true,
  preventInteractionOnTransition: true,
  breakpoints: {
    768: {  // 1024px以上のときに適用する設定
      slidesPerView: 8
    }
  }
});


$('.prizes__card').hover(
  function () {
    $(this).addClass('hover-border');
  },
  function () {
    $(this).removeClass('hover-border');
  }
);
