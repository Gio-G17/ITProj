const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const sidebarcont = document.getElementById('sidebarcont');

let menuOpen = false;

function openMenu() {
  menuOpen = true;
  sidebar.style.display = 'flex';
  sidebar.style.animationName = 'slideIn'; // Start slideIn animation
  sidebarcont.style.animationName = 'slideContIn'; // Start slideIn animation

}

function closeMenu() {
  menuOpen = false;
  sidebar.style.animationName = 'slideOut'; // Start slideOut animation
  sidebarcont.style.animationName = 'slideContOut'; // Start slideOut animation
}

hamburger.addEventListener('click', function () {
  if (!menuOpen) {
    openMenu();
  } else {
    closeMenu();
  }
});