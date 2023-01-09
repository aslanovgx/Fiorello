const Images = document.querySelector('.back_image')
// console.log(Images.style.backgroundImage);
var time = 3000

Images[0] = './../src/images/h3-slider-background.jpg'
Images[1] = './../src/images/h3-slider-background-2.jpg'
Images[2] = './../src/images/h3-slider-background-3.jpg'

for (let i = 0; i < 3; i++) {
    const element = Images[i];
    function ChangeImg() {
        Images.src = Images[i]
        if (i < 2) {
            Images.style.transform = 'scale(1.08)'
            i++;
        }
        else {
            Images.style.transform = 'scale(1.02)'
            i = 0;
        }


        setTimeout('ChangeImg()', time);
    }
}
window.onload = ChangeImg;

// --------------------------------------------

// init Isotope
var $grid = $('.isotop_all').isotope({
    // options
});
// filter items on button click
$('.nav_details-2').on('click', 'li', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });


});

$('.nav_details-2').on('click', 'li', function () {
    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');

});

// --------------------------------------------

const İframe_Btn = document.querySelector('#iframe_btn')
const Iframe_Box = document.querySelector('#iframe_f')
const Body = document.querySelector('#main')


if (İframe_Btn) {
    İframe_Btn.addEventListener('click', () => {
        console.log('salam');
        Iframe_Box.style.display = "block"
        Body.style.opacity = "0.5"
        Iframe_Box.style.opacity = "1"

    })
}

var swiper = new Swiper(".swiper-navigate", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// --------------------------------------------------------

const Mobile_Nav = document.querySelector('.mobile_box')
const X_Btn = document.querySelector('.fa-xmark')
const Bar_nav = document.querySelector('.fa-bars')

if(Bar_nav){
    Bar_nav.addEventListener('click', ()=> {
    Mobile_Nav.style.transform = "translateX(0px)"
    // console.log('sa');
    })
}
if(X_Btn){
    X_Btn.addEventListener('click', ()=> {
    Mobile_Nav.style.transform = "translateX(100%)"
    // console.log('sa');
    })
}

// -----------------------------------------------

const cart_add_hover = document.querySelectorAll('#cart_add_hover')
const hover_cart = document.querySelectorAll('#hover_cart')

if(cart_add_hover) {
    for(const but of cart_add_hover)
    but.addEventListener('click', e => {
        var parent = e.target.parentNode.parentNode
        console.log(parent);
        var clone = parent.cloneNode(true)
        hover_cart.appendChild(clone)
    })
}
