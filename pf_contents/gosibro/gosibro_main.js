window.onload = function () {

  var main_bg = document.querySelector('.mainWrap')
  var bt_weAre = document.getElementById('weAre')
  var bt_nature = document.getElementById('nature')
  var bt_culture = document.getElementById('culture')
  var bt_diary = document.getElementById('diary')

  // var bt_changeBg = document.querySelectorAll('.mainMenu')

  // for(i=0; i<bt_changeBg.length; i++){
  //   bt_changeBg[i].onmouseover = function mouseoverHandler() {
  //     if (main_bg) {
  //       main_bg.classList.remove('mainWrap_0','mainWrap_1','mainWrap_2','mainWrap_3');
  //     }
  //     main_bg.classList.add('mainWrap_[i]');
  //     main_bg = bt_changeBg;
  //   }
  // }
  // 콘솔 에러메시지도 안뜸... 왜 안되는 걸까.

  bt_weAre.onmouseover = function weAre(){
    main_bg.classList.remove('mainWrap_nature');
    main_bg.classList.remove('mainWrap_culture');
    main_bg.classList.remove('mainWrap_diary');
    main_bg.classList.add('mainWrap_weAre');
  }

  bt_nature.onmouseover = function nature() {
    main_bg.classList.remove('mainWrap_weAre');
    main_bg.classList.remove('mainWrap_culture');
    main_bg.classList.remove('mainWrap_diary');
    main_bg.classList.add('mainWrap_nature');
  }

  bt_culture.onmouseover = function culture() {
    main_bg.classList.remove('mainWrap_nature');
    main_bg.classList.remove('mainWrap_weAre');
    main_bg.classList.remove('mainWrap_diary');
    main_bg.classList.add('mainWrap_culture');
  }

  bt_diary.onmouseover = function diary() {
    main_bg.classList.remove('mainWrap_nature');
    main_bg.classList.remove('mainWrap_culture');
    main_bg.classList.remove('mainWrap_weAre');
    main_bg.classList.add('mainWrap_diary');
  }
}