window.onload = function () {

  // 모바일 햄버거메뉴 토글 애니메이션
$('.mobileNav').on({
  click: function () {
    $('.mob_nav_wrap').slideToggle();
    $('.gnbline').toggleClass('aniMobileBt');
  }
});

}


