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