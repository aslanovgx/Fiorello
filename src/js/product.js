const Form1 = document.getElementById("form_btn");
const Btns = Form1.getElementsByClassName("btn_desc");
for (var i = 0; i < Btns.length; i++) {
  Btns[i].addEventListener("click", function() {
    console.log('sal');
  var current = document.getElementsByClassName("but_active");
  current[0].className = current[0].className.replace(" but_active", "");
  this.className += " but_active";
  });}

const Btn1 = document.querySelector('.bt1')
const Btn2 = document.querySelector('.bt2')
const Btn3 = document.querySelector('.bt3')

const Row_1 = document.querySelector('.row_desc_1')
const Row_2 = document.querySelector('.row_desc_2')
const Row_3 = document.querySelector('.row_desc_3')

if(Btn1) {
    Btn1.addEventListener('click',()=> {
        Row_1.style.display = "block"
        Row_2.style.display = "none"
        Row_3.style.display = "none"
    })
}
if(Btn2) {
    Btn2.addEventListener('click',()=> {
        Row_1.style.display = "none"
        Row_2.style.display = "block"
        Row_3.style.display = "none"
    })
}
if(Btn3) {
    Btn3.addEventListener('click',()=> {
        Row_1.style.display = "none"
        Row_2.style.display = "none"
        Row_3.style.display = "block"
    })
}