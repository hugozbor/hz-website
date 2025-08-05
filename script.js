// Attempt to play startup sound on page load
window.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('startup-sound');
    if (audio) {
      audio.play().catch((e) => {
        console.warn('Autoplay was blocked by browser:', e.message);
      });
    }
  
    // Initialize time immediately
    updateTime();
  });
  
  // Image + screen logic
  const loginImage = document.getElementById('login-image');
  const hoverZone = document.getElementById('hover-zone');
  const loginScreen = document.getElementById('login-screen');
  const mainScreen = document.getElementById('main-screen');
  
  // Hover image swap
  hoverZone.addEventListener('mouseenter', () => {
    loginImage.src = 'login_hover.png';
  });
  
  hoverZone.addEventListener('mouseleave', () => {
    loginImage.src = 'login.png';
  });
  
  // Click → fade transition
  hoverZone.addEventListener('click', () => {
    loginScreen.classList.add('fade-login');
    mainScreen.classList.add('fade-main');
  });
  
  // Date/time updater
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
  
  // Update time every 30 seconds
  setInterval(updateTime, 30000);
  