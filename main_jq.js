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

  const modal_on = document.querySelectorAll(".img_item")
  const modal_contents = document.querySelectorAll(".modal_box")
  const modal_off = document.querySelectorAll(".modal_close")


  // 1. 클릭 한 것이 몇 번째 modal_on 인지 확인
  // 2. 1번과 같은 순서의 것으로 modal_contents 꺼내라.




  // for (var i = 0; i < modal_on.length; i++) {
  //   modal_on[i].addEventListener('click', function () {
  //     console.log("ok")
  //     console.log(modal_contents)
  //     console.log(modal_on)
  //     if (modal_contents(i).style.display === "none") {
  //       modal_contents.style.display = "block";
  //     }
  //   });
  // }


  // menubtn.addEventListener('click', function () {
  //   if (menu.style.display === "none") {
  //     menu.style.display = "block";
  //   } else {
  //     menu.style.display = "none";
  //   }
  // });


});