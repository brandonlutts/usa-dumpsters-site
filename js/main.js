// Main site interactions
const menuButton = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// Home / Business toggle in temporary dumpster bar
document.querySelectorAll('.customer-toggle').forEach((toggleGroup) => {
  const buttons = toggleGroup.querySelectorAll('.toggle-option');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      buttons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');
    });
  });
});


// Back To Top Button
const toTop = document.querySelector('.to-top');

if (toTop) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      toTop.classList.add('active');
    } else {
      toTop.classList.remove('active');
    }
  });

  toTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}