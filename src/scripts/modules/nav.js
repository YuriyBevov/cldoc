const nav = document.querySelector('.header__nav');

if(nav) {
  const burger = document.querySelector('.burger');

  burger.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
}
