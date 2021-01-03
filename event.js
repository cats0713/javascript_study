const toggleBtn = document.querySelector('.nav_togle_bt');
const menu = document.querySelector('.nav_menu');
const icons = document.querySelector('.nav_links');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});

