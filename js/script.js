// ハンバーガーメニューのを押したときに閉じる
jQuery('#js-drawer-content a[href^="#"]').on("click", function (e) {
    jQuery("#js-drawer-icon").removeClass("is-checked");
    jQuery("#js-drawer-content").removeClass("is-checked");
  });

// ドロワーの表示
jQuery("#js-drawer-icon").on("click",function (e){
    e.preventDefault();
    jQuery("#js-drawer-icon").toggleClass("is-checked");
    jQuery("#js-drawer-content").toggleClass("is-checked")
})