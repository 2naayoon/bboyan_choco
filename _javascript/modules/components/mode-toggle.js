/**
 * Add listener for theme mode toggle
 */

const $toggle = document.getElementById('mode-toggle');
const $icon = document.getElementById('mode-icon');

// export function modeWatcher() {
//   if (!$toggle) {
//     return;
//   }

//   $toggle.addEventListener('click', () => {
//     Theme.flip();
//   });
// }

export function modeWatcher() {
  if (!$toggle || !$icon) {
    return;
  }

  const setIcon = () => {
    // Theme.visualState가 'dark'이면 fa-moon 클래스를 추가하고, 아니면 제거합니다.
    $icon.classList.toggle('fa-moon', Theme.visualState === Theme.DARK);
    // Theme.visualState가 'light'이면 fa-sun 클래스를 추가하고, 아니면 제거합니다.
    $icon.classList.toggle('fa-sun', Theme.visualState !== Theme.DARK);
  };

  // 초기 아이콘 설정
  setIcon();

  // 클릭 이벤트 리스너
  $toggle.addEventListener('click', () => {
    Theme.flip();
    setIcon();
  });
}

