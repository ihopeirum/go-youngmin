$(document).ready(function () {

  const gototop = document.getElementsByClassName('top_logo');
  const aboutbtn = document.querySelectorAll(".goto_about");
  const skillsbtn = document.querySelectorAll(".goto_skills");
  const portfoliobtn = document.querySelectorAll(".goto_portfolio");
  const contactbtn = document.querySelectorAll(".goto_contact");


  // ++++++++ mobile menu toggle ++++++++

  $(".gnb_menubtn").click(function () {
    $(".gnb_menu_mob").slideToggle(500);
  });

  // ++++++++ menu offset ++++++++

  $(gototop).click(function () {
    position = $(".main_prologue").offset();
    $("body,html").stop().animate({
      scrollTop: position.top
    }, 1000);
  });

  $(aboutbtn).click(function () {
    position = $(".loc_about").offset();
    $("body,html").stop().animate({
      scrollTop: position.top
    }, 1000);
    $(".gnb_menu_mob").hide();
  });

  $(skillsbtn).click(function () {
    position = $(".loc_skills").offset();
    $("body,html").stop().animate({
      scrollTop: position.top
    }, 1000);
    $(".gnb_menu_mob").hide();
  });

  $(portfoliobtn).click(function () {
    position = $(".loc_portfolio").offset();
    $("body,html").stop().animate({
      scrollTop: position.top
    }, 1000);
    $(".gnb_menu_mob").hide();
  });

  $(contactbtn).click(function () {
    position = $(".loc_contact").offset();
    $("body,html").stop().animate({
      scrollTop: position.top
    }, 1000);
    $(".gnb_menu_mob").hide();
  });

  // ++++++++ Modal ++++++++

  // .modal_box * 6개
  var modal00 = document.getElementById("modal00");
  var modal01 = document.getElementById("modal01");
  var modal02 = document.getElementById("modal02");
  var modal03 = document.getElementById("modal03");
  var modal04 = document.getElementById("modal04");
  var modal05 = document.getElementById("modal05");

  // .img_item (썸네일div) * 6개
  var btn00 = document.getElementById("modal_open00");
  var btn01 = document.getElementById("modal_open01");
  var btn02 = document.getElementById("modal_open02");
  var btn03 = document.getElementById("modal_open03");
  var btn04 = document.getElementById("modal_open04");
  var btn05 = document.getElementById("modal_open05");

  // .modal_close * 6개
  var span00 = document.getElementById("modal_close00");
  var span01 = document.getElementById("modal_close01");
  var span02 = document.getElementById("modal_close02");
  var span03 = document.getElementById("modal_close03");
  var span04 = document.getElementById("modal_close04");
  var span05 = document.getElementById("modal_close05");

  // 버튼 클릭 - 모달 오픈 
  btn00.onclick = function () {
    modal00.style.display = "block";
  }
  btn01.onclick = function () {
    modal01.style.display = "block";
  }
  btn02.onclick = function () {
    modal02.style.display = "block";
  }
  btn03.onclick = function () {
    modal03.style.display = "block";
  }
  btn04.onclick = function () {
    modal04.style.display = "block";
  }
  btn05.onclick = function () {
    modal05.style.display = "block";
  }

  // 닫기 클릭 - 모달 닫기
  span00.onclick = function () {
    modal00.style.display = "none";
  }
  span01.onclick = function () {
    modal01.style.display = "none";
  }
  span02.onclick = function () {
    modal02.style.display = "none";
  }
  span03.onclick = function () {
    modal03.style.display = "none";
  }
  span04.onclick = function () {
    modal04.style.display = "none";
  }
  span05.onclick = function () {
    modal05.style.display = "none";
  }

  // 모달 바깥 클릭하면 모달닫음
  window.onclick = function (event) {
    if (event.target == modal00) {
      modal00.style.display = "none";
    }
  }
  window.onclick = function (event) {
    if (event.target == modal01) {
      modal01.style.display = "none";
    }
  }
  window.onclick = function (event) {
    if (event.target == modal02) {
      modal02.style.display = "none";
    }
  }
  window.onclick = function (event) {
    if (event.target == modal03) {
      modal03.style.display = "none";
    }
  }
  window.onclick = function (event) {
    if (event.target == modal04) {
      modal04.style.display = "none";
    }
  }
  window.onclick = function (event) {
    if (event.target == modal05) {
      modal05.style.display = "none";
    }
  }


  // Modal 한번에 해결하기 도대체 어떻게 하지. (중첩for문 / 배열 알아보기)

  // 1. 클릭 한 것이 몇 번째 modal_on 인지 확인
  // 2. 1번과 같은 순서의 것으로 modal_contents 꺼내라.

  // const modal_on = document.querySelectorAll(".img_item");
  // const modal_contents = document.querySelectorAll(".modal_box");
  // const modal_off = document.querySelectorAll(".modal_close");

  // console.log(modal_contents)
  // console.log(modal_on.length)

  // for (var i = 0; i < modal_on.length; i++) {
  //   for (var j = 0; j < modal_contents.length; j++) {
  //     modal_on[i].addEventListener('click', function () {
  //       if (modal_contents[j].style.display === "none") {
  //         modal_contents.style.display = "block";
  //       } else {
  //         modal_contents.style.display = "none";
  //       }
  //     })
  //   }
  // }

  // 에러 : display 속성을 못 찾음 / for문 안의 변수가 정의되지 않았음...


});