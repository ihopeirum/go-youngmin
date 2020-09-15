window.onload = function () {

  var tab_btn = document.querySelectorAll(".tablink");
  var tab_cont = document.querySelectorAll(".tabcontent");

  function tabHandler() {
    var active = document.querySelectorAll('.active')

    if (active) {
      active.classList.remove('active');
    }
    this.classList.add('active');
  }

  for (i = 0; i < tab_btn.length; i++) {
    console.log(tab_btn[i]);
    tab_btn[i].addEventListener('click', tabHandler());
  }

  // error : "remove", active.classList is undefined.



}