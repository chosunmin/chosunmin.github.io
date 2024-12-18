
document.addEventListener('DOMContentLoaded', function () {
  // 모든 'has-submenu' 요소에 클릭 이벤트 추가
  document.querySelectorAll('.has-submenu > a').forEach(function (menuLink) {
    menuLink.addEventListener('click', function (event) {
      event.preventDefault(); // 기본 링크 동작 방지
      
      const submenu = this.nextElementSibling;

      // 서브메뉴 슬라이드 토글
      if (submenu.classList.contains('open')) {
        submenu.classList.remove('open'); // 슬라이드 업
      } else {
        // 다른 열린 서브메뉴 닫기
        document.querySelectorAll('.submenu.open').forEach(function (openSubmenu) {
          openSubmenu.classList.remove('open');
        });

        submenu.classList.add('open'); // 슬라이드 다운
      }
    });
  });
});