document.addEventListener('DOMContentLoaded', function () {
  // 서브메뉴 토글 버튼 클릭 이벤트
  document.querySelectorAll('.submenu-toggle').forEach(function (toggle) {
    toggle.addEventListener('click', function () {
      const submenu = this.nextElementSibling; // 바로 다음 형제 요소가 서브메뉴
      const isOpen = submenu.style.maxHeight;

      // 서브메뉴 열기/닫기
      if (isOpen) {
        submenu.style.maxHeight = null; // 슬라이드 업
      } else {
        submenu.style.maxHeight = submenu.scrollHeight + "px"; // 슬라이드 다운
      }
    });
  });
});
