window.onload = function () {

  var tabList = document.querySelectorAll(".tab_list_wrap .tab_list")

  Array.prototype.forEach.call(tabList, function (list) {
    list.children[0].addEventListener('click', function (e) {
      e.preventDefault();
      //preventDefault는 기본적인 a 태그의 기능 (페이지 이동)을 막음

      var tabContent = document.querySelectorAll(".tab_container .tab_content")
      var tabNum = this.parentElement.getAttribute('data-tabnum')
      // a태그를 클릭할 때 클릭된.tab_list의 data - num이라는 속성값을 가져와 tabNum이라는 변수에 담는다.

      // 그리고 3 개의.content 태그 중에서 tabNum과 동일한 인덱스 번호를 가지는 태그를 display: block으로 바꿔주고
      // 나머지.content는 모두 display: none으로 바꿔준다.

      Array.prototype.forEach.call(tabContent, function (cont, i) {
        cont.style.display = 'none'
        tabList[i].className = 'tab_list'
      })
      tabContent[tabNum].style.display = 'block'

      if (list.className.indexOf('tab_active') == -1) {
        list.className = 'tab_list tab_active'
      }
    });
  });

  // ** JS로 Class제어하기 **
  // Dom.classList.remove('className')
  // Dom.classList.add('className')
  // Dom.classList.contains('className')
  // 단, IE9 이하는 지원안됨
  // classList 대신 className 을 쓸 수 있다.

  // ** CSS설정 **
  // .tab_list a {display:block}
  // .tab_content {display:none}
  // .tab_content:first-child {display:block}

  // ** html설정 **
  // .tab_list의 태그마다 각각 인라인 속성으로 data-tabnum="n" 입력한다.



}