window.onload = function () {
    $(document).ready(function () {

      var position;
      var gototop = document.getElementsByClassName('menubar_logo');
      var menu = document.getElementsByClassName('menu');
      var mo_gototop = document.getElementsByClassName('nameistoru');
      var mo_menu = document.getElementsByClassName('mo_menu');
      var count = 3;
      var prokk = 1;

      $(".samsun").click(function () {
        $(".hidden").slideToggle(500);
        $('.stic').toggleClass('sticAni')
      });


      // ++++++++ Mo menu offset ++++++++
      $(mo_gototop).click(function () {
        position = $(".hiddenbox").offset();
        // console.log(position)
        $("body,html").stop().animate({ scrollTop: position.top }, 900);
      });
      $(mo_menu[0]).click(function () {
        position = $(".intro").offset();
        // minusH = $(".mo_menubar").height();
        $("body,html").stop().animate({ scrollTop: position.top}, 900);
        $('.stic').toggleClass('sticAni')
        $(".hidden").hide();
      });
      $(mo_menu[1]).click(function () {
        position = $(".class").offset();
        // minusH = $(".mo_menubar").height();
        $("body,html").stop().animate({ scrollTop: position.top}, 900);
        $('.stic').toggleClass('sticAni')
        $(".hidden").hide();
      });
      $(mo_menu[2]).click(function () {
        position = $(".gallery").offset();
        // minusH = $(".mo_menubar").height();
        $("body,html").stop().animate({ scrollTop: position.top }, 900);
        $('.stic').toggleClass('sticAni')
        $(".hidden").hide();
      });
      $(mo_menu[3]).click(function () {
        position = $(".cafe").offset();
        // minusH = $(".mo_menubar").height();
        $("body,html").stop().animate({ scrollTop: position.top}, 900);
        $('.stic').toggleClass('sticAni')
        $(".hidden").hide();
      });
      $(mo_menu[4]).click(function () {
        position = $(".location").offset();
        // minusH = $(".mo_menubar").height();
        $("body,html").stop().animate({ scrollTop: position.top}, 900);
        $('.stic').toggleClass('sticAni')
        $(".hidden").hide();
      });
      // ++++++++ Mo menu offset ++++++++

      // ++++++++ main img slide ++++++++
      var slide_count = 1;
      var slide_width = $(".slide_wrap").width();
      var max = $(".slide_wrap ul").children().length;

      slide_resize();
      console.log(max);

      $(window).resize(function () {
        slide_resize();
      });


      function slide_resize() {
        slide_width = $(".slide_wrap").width();
        $(".slide_wrap ul").css({
          'width': slide_width * max,
          'left': -slide_width * slide_count
        });
        $(".slide_wrap").css({
          'height': slide_width / 0.8
        });
        $(".slide_wrap ul li").css({
          'width': slide_width
        });
      }

      
      function timeout() {
        slideTime = true;
        setTimeout(function () {
          slideTime = false;
        }, 2000);
      }
      rollingId = setInterval(function () {
        rollingStart();
      }, 3000);


      function rollingStart() {
        $(".slide_wrap ul").css("width", slide_width * max + "px");
        timeout();
        $(".slide_wrap ul").animate({
          left: -slide_width + "px"
        }, 800, function () {
          $(this).append("<li>" + $(this).find("li:first").html() + "</li>");

          $(this).find("li:first").remove();

          $(this).css("left", 0);

        });
      }
      // 배너슬라이드 끝

      var mapContainer = document.getElementById('map'), // 지도의 중심좌표
      mapOption = {
        center: new kakao.maps.LatLng(37.7534999, 126.7189157), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
      };

    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    // 지도에 마커를 표시합니다
    var marker = new kakao.maps.Marker({
      map: map,
      position: new kakao.maps.LatLng(37.7528533, 126.7189157)
    });

    // 커스텀 오버레이에 표시할 컨텐츠 입니다
    // 커스텀 오버레이는 아래와 같이 사용자가 자유롭게 컨텐츠를 구성하고 이벤트를 제어할 수 있기 때문에
    // 별도의 이벤트 메소드를 제공하지 않습니다
    var content = '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      '            도예공방 토루' +
      '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
      '        </div>' +
      '        <div class="body">' +
      '            <div class="img">' +
      '                <img src="img/logo_toru2_small.png" width="73" height="70">' +
      '           </div>' +
      '            <div class="desc">' +
      '                <div class="ellipsis">경기 파주시 오도로 160-16</div>' +
      '                <div class="jibun ellipsis">문의.010 -9596-5130</div>' +
      '                <div><a href="http://kko.to/jKYOax4YM" target="_blank" class="link">길찾기</a></div>' +
      '            </div>' +
      '        </div>' +
      '    </div>' +
      '</div>';

    // 마커 위에 커스텀오버레이를 표시합니다
    // 마커를 중심으로 커스텀 오버레이를 표시하기위해 CSS를 이용해 위치를 설정했습니다
    var overlay = new kakao.maps.CustomOverlay({
      content: content,
      map: map,
      position: marker.getPosition()
    });

    // 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
    kakao.maps.event.addListener(marker, 'click', function () {
      overlay.setMap(map);
    });

    // 커스텀 오버레이를 닫기 위해 호출되는 함수입니다
    function closeOverlay() {
      overlay.setMap(null);
    }
    // 지도 타입 변경 컨트롤을 생성한다
    // var mapTypeControl = new kakao.maps.MapTypeControl();

    // 지도의 상단 우측에 지도 타입 변경 컨트롤을 추가한다
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

    });
  }
