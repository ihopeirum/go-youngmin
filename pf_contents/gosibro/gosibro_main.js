window.onload = function () {

  var main_bg = document.querySelector('.mainWrap')

  // var bt_changeBg = document.querySelectorAll('.mainMenu')
  // var current;

  var bt_weAre = document.getElementById('weAre')
  var bt_nature = document.getElementById('nature')
  var bt_culture = document.getElementById('culture')
  var bt_diary = document.getElementById('diary')

  bt_weAre.onmouseover = function weAre(){
    main_bg.classList.add('mainWrap_weAre');
  }

  bt_nature.onmouseover = function nature() {
    main_bg.classList.add('mainWrap_nature');
  }

  bt_culture.onmouseover = function culture() {
    main_bg.classList.add('mainWrap_culture');
  }

  bt_diary.onmouseover = function diary() {
    main_bg.classList.add('mainWrap_diary');
  }

  // 현재상태 : div 1-2-3-4 순으로 1회만 성공. 되돌아오기 안됨
  // current 외 다른 클라스 제거하기
  // 함수 최소화


}