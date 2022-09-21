const btn = document.querySelector('.present-btn');

btn.addEventListener('click', () => {
  btn.classList.add('present-btn--clicked');

  setTimeout(() => {
    btn.remove();
  }, 8000);
})