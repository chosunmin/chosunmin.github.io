document.addEventListener('DOMContentLoaded', function () {
  // 상위 메뉴 클릭 이벤트 추가
  document.querySelectorAll('.has-submenu > a').forEach(function (menuLink) {
    menuLink.addEventListener('click', function (event) {
      event.preventDefault(); // 기본 링크 동작 방지
      const submenu = this.nextElementSibling;

      // 서브메뉴 토글
      if (submenu.classList.contains('open')) {
        submenu.classList.remove('open'); // 슬라이드 업
      } else {
        document.querySelectorAll('.submenu.open').forEach(function (openSubmenu) {
          openSubmenu.classList.remove('open'); // 다른 열린 서브메뉴 닫기
        });
        submenu.classList.add('open'); // 슬라이드 다운
      }
    });
  });
});
