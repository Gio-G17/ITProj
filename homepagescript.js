const sidebararrow1 = document.getElementById('sidebararrow1');
const sidebararrow2 = document.getElementById('sidebararrow2');
const sidebararrow3 = document.getElementById('sidebararrow3');

const sidebar1 = document.getElementById('sidebar1');
const sidebar2 = document.getElementById('sidebar2');
const sidebar3 = document.getElementById('sidebar3');

const sidebarcont1 = document.getElementById('sidebarcont1');
const sidebarcont2 = document.getElementById('sidebarcont2');
const sidebarcont3 = document.getElementById('sidebarcont3');

const topButton = document.getElementById('return-to-top');

let menuOpen1 = false;
let menuOpen2 = false;
let menuOpen3 = false;

function openMenu1() {
  menuOpen1 = true;
  sidebar1.style.display = 'flex';
  sidebar1.style.animationName = 'slideIn'; // Start slideIn animation
  sidebarcont1.style.animationName = 'slideContIn'; // Start slideIn animation

}

function openMenu2() {
  menuOpen2 = true;
  sidebar2.style.display = 'flex';
  sidebar2.style.animationName = 'slideIn'; // Start slideIn animation
  sidebarcont2.style.animationName = 'slideContIn'; // Start slideIn animation

}

function openMenu3() {
  menuOpen3 = true;
  sidebar3.style.display = 'flex';
  sidebar3.style.animationName = 'slideIn'; // Start slideIn animation
  sidebarcont3.style.animationName = 'slideContIn'; // Start slideIn animation

}

function closeMenu1() {
  menuOpen1 = false;
  sidebar1.style.animationName = 'slideOut'; // Start slideOut animation
  sidebarcont1.style.animationName = 'slideContOut'; // Start slideOut animation
}

function closeMenu2() {
  menuOpen2 = false;
  sidebar2.style.animationName = 'slideOut'; // Start slideOut animation
  sidebarcont2.style.animationName = 'slideContOut'; // Start slideOut animation
}

function closeMenu3() {
  menuOpen3 = false;
  sidebar3.style.animationName = 'slideOut'; // Start slideOut animation
  sidebarcont3.style.animationName = 'slideContOut'; // Start slideOut animation
}


sidebararrow1.addEventListener('click', function () {
  if (!menuOpen1) {
    openMenu1();
  } else {
    closeMenu1();
  }
});

sidebararrow2.addEventListener('click', function () {
  if (!menuOpen2) {
    openMenu2();
  } else {
    closeMenu2();
  }
});

sidebararrow3.addEventListener('click', function () {
  if (!menuOpen3) {
    openMenu3();
  } else {
    closeMenu3();
  }
});


window.addEventListener('scroll', () => {
  if (window.scrollY > 150) {
      topButton.style.display = 'block';
  } else {
      topButton.style.display = 'none';
  }
});


