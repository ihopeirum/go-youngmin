window.onload = function () {

  var wheel_data;
  var wheel_count = 0;
  var wheel_event = false;

  $("html").on('mousewheel', function (c) {
    wheel_data = c.originalEvent.wheelDelta;
    if (wheel_data < 0 && wheel_count < 3 && wheel_event == false) {
      wheel_count++;
      console.log("내려감" + wheel_count);
      div_offset();
    } else if (wheel_data > 0 && wheel_count > 0 && wheel_event == false) {
      wheel_count--;
      console.log("올라감" + wheel_count);
      div_offset();
    }
  });

  function div_offset() {
    wheel_event = true;
    if (wheel_count == 0) {
      position = $("#sect01").offset();
      $("html").stop().animate({scrollTop: position.top}, 500);
    } else if (wheel_count == 1) {
      position = $("#sect02").offset();
      $("html").stop().animate({scrollTop: position.top}, 500);
    } else if (wheel_count == 2) {
      position = $("#sect03").offset();
      $("html").stop().animate({scrollTop: position.top}, 500);
    } 
    setTimeout(function () {wheel_event = false}, 500);
  }


}