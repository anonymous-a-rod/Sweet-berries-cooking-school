// NAV BAR MENU FOR MOBILE

const btn = document.querySelector('.dropbtn');
const content = document.querySelector('.dropdown-content');

btn.addEventListener('touchstart', () => {
  if(!content.classList.contains('active')){
    content.classList.add('active');
  } else {
    content.classList.remove('active');
  }
  
});