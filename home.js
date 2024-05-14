const toggleButton = document.querySelector('.header__bar-icon');
const headerMid = document.querySelector('.header__bar-mid ul ');

toggleButton.addEventListener('click',()=>{
    console.log('clicked')
    headerMid.classList.toggle('active');
   
});