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
$('.nav_details-2').on( 'click', 'li', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
    
});






// var Card_Isotop = document.querySelector('.isotop_card')
//   var Isotop_all = document.querySelectorAll('.isotop_all')
//     for (let i = 0; i < Isotop_all.length; i++) {
//       const element = Isotop_all[i];
//       if(element.style.height = '0px'){
//         element.style.display = "none"
//           console.log('sa');
//       }
//   }