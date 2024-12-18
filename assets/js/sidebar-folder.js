document.addEventListener('DOMContentLoaded', function () {
  // 화살표 클릭 이벤트 추가
  document.querySelectorAll('.submenu-toggle').forEach(function (toggle) {
    toggle.addEventListener('click', function (event) {
      event.preventDefault(); // 기본 동작 방지
      const submenu = this.closest('li').querySelector('.submenu'); // 서브메뉴 찾기
      const isOpen = submenu.style.maxHeight;

      // 서브메뉴 토글
      if (isOpen) {
        submenu.style.maxHeight = null; // 닫기
      } else {
        document.querySelectorAll('.submenu').forEach(function (openSubmenu) {
          openSubmenu.style.maxHeight = null; // 다른 서브메뉴 닫기
        });
        submenu.style.maxHeight = submenu.scrollHeight + "px"; // 열기
      }
    });
  });
});
