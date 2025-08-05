window.addEventListener('DOMContentLoaded', () => {
  // Update time
  updateTime();
  setInterval(updateTime, 30000);

  // Login logic
  const loginImage = document.getElementById('login-image');
  const hoverZone = document.getElementById('hover-zone');
  const loginScreen = document.getElementById('login-screen');
  const mainScreen = document.getElementById('main-screen');

  hoverZone.addEventListener('mouseenter', () => {
    loginImage.src = 'login_hover.png';
  });

  hoverZone.addEventListener('mouseleave', () => {
    loginImage.src = 'login.png';
  });

  hoverZone.addEventListener('click', () => {
    loginScreen.classList.add('fade-login');
    mainScreen.classList.add('fade-main');
  });

  // Finder logic
  const finderIcon = document.querySelector('img[alt="Finder"]');
  const finderWindow = document.getElementById('finder-window');
  const finderBg = document.getElementById('finder-bg');
  const instaHotspot = document.getElementById('instagram-hotspot');
  const tiktokHotspot = document.getElementById('tiktok-hotspot');

  if (finderIcon && finderWindow) {
    finderIcon.addEventListener('click', () => {
      finderWindow.style.display = 'block';
    });
  }

  // Instagram hover/click
  instaHotspot.addEventListener('mouseenter', () => {
    finderBg.src = 'instagram-hover.png';
  });

  instaHotspot.addEventListener('mouseleave', () => {
    finderBg.src = 'finder-window.png';
  });

  instaHotspot.addEventListener('click', () => {
    window.open('https://www.instagram.com/hugozbor/', '_blank');
  });

  // TikTok hover/click
  tiktokHotspot.addEventListener('mouseenter', () => {
    finderBg.src = 'tiktok-hover.png';
  });

  tiktokHotspot.addEventListener('mouseleave', () => {
    finderBg.src = 'finder-window.png';
  });

  tiktokHotspot.addEventListener('click', () => {
    window.open('https://www.tiktok.com/@hugozbor', '_blank');
  });

    const closeFinder = document.getElementById('close-finder');
    if (closeFinder && finderWindow) {
    closeFinder.addEventListener('click', () => {
        finderWindow.style.display = 'none';
        finderBg.src = 'finder-window.png'; // reset image
    });
    }

});

function updateTime() {
  const now = new Date();
  const options = {
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
  };
  const formatted = now.toLocaleString('en-AU', options).replace(',', '');
  const timeEl = document.getElementById('datetime');
  if (timeEl) timeEl.textContent = formatted;
}
