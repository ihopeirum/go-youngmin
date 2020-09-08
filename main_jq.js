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


});