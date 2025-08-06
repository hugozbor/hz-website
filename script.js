window.addEventListener('DOMContentLoaded', () => {
  // Time
  updateTime();
  setInterval(updateTime, 30000);
  let topZIndex = 201; // start above background and dock
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

  const finderIcon = document.querySelector('img[alt="Finder"]');
  const mailIcon = document.querySelector('img[alt="Mail"]');
  const notesIcon = document.querySelector('img[alt="Notes"]');
  const binIcon = document.querySelector('img[alt="Bin"]');

  const finderWindow = document.getElementById('finder-window');
  const mailWindow = document.getElementById('mail-window');
  const notesWindow = document.getElementById('notes-window');
  const binWindow = document.getElementById('bin-window');

  const finderBg = document.getElementById('finder-bg');
  const binBg = document.getElementById('bin-bg');

  const closeFinder = document.getElementById('close-finder');
  const closeMail = document.getElementById('close-mail');
  const closeNotes = document.getElementById('close-notes');
  const closeBin = document.getElementById('close-bin');

  const finderIndicator = document.getElementById('indicator-finder');
  const mailIndicator = document.getElementById('indicator-mail');
  const notesIndicator = document.getElementById('indicator-notes');
  const binIndicator = document.getElementById('indicator-bin');

  // Open + close logic for all
  finderIcon.addEventListener('click', () => {
    finderWindow.style.display = 'block';
    finderWindow.style.zIndex = ++topZIndex;
    finderIndicator.classList.add('active');
  });

  closeFinder.addEventListener('click', () => {
    finderWindow.style.display = 'none';
    finderBg.src = 'finder-window.png';
    finderIndicator.classList.remove('active');
  });

  mailIcon.addEventListener('click', () => {
    mailWindow.style.display = 'block';
    mailWindow.style.zIndex = ++topZIndex;
    mailIndicator.classList.add('active');
  });

  closeMail.addEventListener('click', () => {
    mailWindow.style.display = 'none';
    mailIndicator.classList.remove('active');
  });

  notesIcon.addEventListener('click', () => {
    notesWindow.style.display = 'block';
    notesWindow.style.zIndex = ++topZIndex;
    notesIndicator.classList.add('active');
  });

  closeNotes.addEventListener('click', () => {
    notesWindow.style.display = 'none';
    notesIndicator.classList.remove('active');
  });

  binIcon.addEventListener('click', () => {
    binWindow.style.display = 'block';
    binWindow.style.zIndex = ++topZIndex;
    binWindow.style.opacity = '1';
    binIndicator.classList.add('active');
  });
  

  closeBin.addEventListener('click', () => {
    binWindow.style.display = 'none';
    binBg.src = 'bin-window.png';
    binIndicator.classList.remove('active');
  });

  // Hover image switches for Finder
  const instaHotspot = document.getElementById('instagram-hotspot');
  const tiktokHotspot = document.getElementById('tiktok-hotspot');

  instaHotspot.addEventListener('mouseenter', () => {
    finderBg.src = 'instagram-hover.png';
  });

  instaHotspot.addEventListener('mouseleave', () => {
    finderBg.src = 'finder-window.png';
  });

  instaHotspot.addEventListener('click', () => {
    window.open('https://www.instagram.com/hugozbor/', '_blank');
  });

  tiktokHotspot.addEventListener('mouseenter', () => {
    finderBg.src = 'tiktok-hover.png';
  });

  tiktokHotspot.addEventListener('mouseleave', () => {
    finderBg.src = 'finder-window.png';
  });

  tiktokHotspot.addEventListener('click', () => {
    window.open('https://www.tiktok.com/@hugozbor', '_blank');
  });
  // Notes tab logic
  const noteTabs = document.querySelectorAll('.note-tab');
  const notes = document.querySelectorAll('.note-text');

  noteTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.note;
      notes.forEach(note => {
        note.classList.remove('active');
      });
      document.getElementById(target).classList.add('active');
    });
  });
  document.getElementById('note1').classList.add('active');


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
