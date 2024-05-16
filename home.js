const toggleButton = document.querySelector('.header__bar-icon');
const headerMid = document.querySelector('.header__bar-mid ul ');


toggleButton.addEventListener('click',()=>{
    console.log('clicked')
    headerMid.classList.toggle('active');
});

const changeIcon = function (icon){
    icon.classList.toggle('fa-times');
} 

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        nav: true,  
        autoplay: true,
        autoplaySpeed: 1000,
        autoplayHoverPause: true,
    });
})


window.onload = function() {
    document.getElementById('SALE').style.display = "flex";
  
    var tabButton = document.getElementsByClassName("tab_button");
    for (var i = 0; i < tabButton.length; i++) {
      if (tabButton[i].textContent !== 'SALE') {
        tabButton[i].classList.remove("active");
      } else {
        tabButton[i].classList.add("active");
      }
    }
  }

function MyProduct(evt, productName){
    let categories__product =document.getElementsByClassName('categories__product');
    for(let i=0; i<categories__product.length;i++){
        categories__product[i].style.display='none'
    }

    let tabButton = document.getElementsByClassName("tab_button");
  for (i = 0; i < tabButton.length; i++) {
    tabButton[i].className = tabButton[i].className.replace(" active", "");
  }

  document.getElementById(productName).style.display = "flex";
  evt.currentTarget.className += " active";
}