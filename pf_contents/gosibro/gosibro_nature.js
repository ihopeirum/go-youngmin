$(document).ready(function () {
  var prevkk = 1;

  console.log('linked')

  $("#imgBt_R").click(function () {

    console.log("clkR")

    if (prevkk == 1) {
      prevkk = 2;
      $(".slideWrap ul").stop().animate({
        left: $(-(".imgW").width) * 2
      }, {
        complete: function () {
          $(".slideWrap ul").append($(".slideWrap ul").children()[0]);
          $(".slideWrap ul").css({ "left": -500 });
          prevkk = 1;
        }
      });
    }
  });

  $("#imgBt_L").click(function () {
    
    console.log ("clkL")

    $(".slideWrap ul").stop().animate({
      left: 0
    }, {
      complete: function () {
        $(".slideWrap ul").prepend($(".slideWrap ul").children()[1]);
        $(".slideWrap ul").css({"left": $(-(".imgW").width)});
      }
    });
  }); 

  anime.timeline({
      loop: true
    })
    .add({
      targets: '.actionWord',
      scale: [14, 1],
      opacity: [0, 1],
      easing: "easeOutCirc",
      duration: 800,
      delay: (el, i) => 800 * i
    }).add({
      targets: '.sect_tit',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });

})